import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { SearchBarStyles } from './SearchBarStyles';

const SearchBarComp = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder='Search'
      onChangeText={onChangeSearch}
      value={searchQuery}
      elevation={4}
      style={SearchBarStyles.bar}
      mode='bar'
    />
  );
};

export default SearchBarComp;
