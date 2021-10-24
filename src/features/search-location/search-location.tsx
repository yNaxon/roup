import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';
import { useDebounce } from '../../use-debounce';
import { Input } from '../../components/input/input';
import { Button } from '../../components/button/button';
import { useLocations } from '../../api/use-locations';
import { LocationResource } from '../../api/types';
import { Spinner } from '../../components/spinner/spinner';
import styles from './search-location.module.scss';
import { GeneralError } from '../../components/general-error/general-error';

export function SearchLocation() {
  const history = useHistory();
  const [value, setValue] = useState<string>();
  const search = useDebounce(value, 300);
  const {locations, error} = useLocations(search);
  const inputRef = useRef<HTMLInputElement|null>(null);

  const loading = search && !locations && !error;

  useEffect(() => {
    if(inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleClose = () => {
    history.goBack();
  }

  const handleSelect = (suggestion: any) => {
    history.push(`/forcast/${suggestion.id}`)
  }

  const handleChange = (event: any, { newValue }: any) => {
    setValue(newValue);
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Autosuggest
          suggestions={locations || []}
          alwaysRenderSuggestions
          onSuggestionsClearRequested={() => setValue(undefined)}
          onSuggestionSelected={(event, data) => handleSelect(data.suggestion)}
          onSuggestionsFetchRequested={({value}) => setValue(value)}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          renderInputComponent={Input}
          inputProps={{
            value: value || '',
            onChange: handleChange,
            ref: inputRef,
          }}
          theme={styles}
        />
        <Button
          className={styles.close}
          onClick={handleClose}
        >
          X
        </Button>
      </header>
      {loading && <div className={styles.content}><Spinner /></div>}
      {error && <div className={styles.content}><GeneralError message={error.message} /></div>}
    </div>
  );
}

const renderSuggestion = (location: LocationResource) => (
  <Button className={styles.suggestion}>
    {location.name}, {location.countryName}
  </Button>
);

const getSuggestionValue = (location: LocationResource) => location.id;
