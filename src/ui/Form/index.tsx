'use client';

import { FC } from 'react';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Input from '@/ui/Input';
import Button from '@/ui/Button';

import clsx from 'clsx';
import s from './index.module.scss';
import { useMutation } from '@tanstack/react-query';
import api from '@/api/axios';

const formSchema = z.object({
  name: z.string().min(1, 'Введите имя'),
  phone: z.string().regex(/^\d{11}$/, 'Введите корректный номер'),
});

type FormDto = z.infer<typeof formSchema>;

const Form: FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormDto>({
    resolver: zodResolver(formSchema),
  });

  const mutation = useMutation({
    mutationFn: (data: FormDto) =>
      api.post('/send-form', formSchema.safeParse(data).data),
    onSuccess: () => {
      alert('Спасибо, с Вами свяжутся');
      reset();
    },
  });

  const onSubmit = (data: FormDto) => {
    mutation.mutate(data);
  };
  const formatName = (value: string): string => {
    return value
      .toLowerCase()
      .replace(/[^a-zа-яё\- ]/giu, '')
      .replace(/\s*-\s*/g, '-')
      .replace(/-{2,}/g, '-')
      .replace(/(?:^|[-\s])\p{L}/gu, (match) => match.toUpperCase());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={clsx(s.form)}>
      <Controller
        name='name'
        control={control}
        render={({ field }) => (
          <Input
            placeholder='Как к вам обращаться?'
            className={s.form__input}
            value={field.value ?? ''}
            onChange={(value: string): void =>
              field.onChange(formatName(value))
            }
            onBlur={(e) => {
              const trimmed = e.target.value.trim();
              field.onChange(formatName(trimmed));
              field.onBlur();
            }}
          />
        )}
      />
      {errors.name && <span className={s.error}>{errors.name.message}</span>}

      <Controller
        name='phone'
        control={control}
        render={({ field }) => (
          <Input
            type='tel'
            placeholder='Номер телефона'
            className={s.form__input}
            value={field.value}
            onChange={(val) => field.onChange(val)}
          />
        )}
      />
      {errors.phone && <span className={s.error}>{errors.phone.message}</span>}

      <Button className={s.form__btn} sizeBtn='long' type='submit'>
        Бесплатная консультация
      </Button>
    </form>
  );
};

export default Form;
