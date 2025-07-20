'use client';

import { FC, useMemo, useState } from 'react';
import Input from '@/ui/Input';
import Button from '@/ui/Button';
import s from './index.module.scss';
import clsx from 'clsx';
import useMediaQuery from '@/hooks/useMediaQuery';

import { ItemDto, ItemListDto } from '../schemas/item.schema';

interface SearchProps {
  data: ItemListDto;
  onResult: (filtered: ItemListDto) => void;
  className?: string;
}

const Search: FC<SearchProps> = ({ data, onResult, className }) => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const lowerQuery = query.toLowerCase().trim();

    return data.filter((item: ItemDto) =>
      item.name.toLowerCase().includes(lowerQuery)
    );
  }, [data, query]);

  const handleSearch = () => {
    onResult(filtered);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const isMobile = useMediaQuery('(max-width: 550px)');

  return (
    <div className={clsx(s.search, className)}>
      <Input
        value={query}
        onChange={setQuery}
        onKeyDown={handleKeyDown}
        placeholder='Поиск...'
        className={s.search__input}
      />
      <Button
        onClick={handleSearch}
        className={s.search__button}
        icon={isMobile ? 'arrow' : undefined}
      >
        {isMobile ? '' : 'Найти'}
      </Button>
    </div>
  );
};

export default Search;
