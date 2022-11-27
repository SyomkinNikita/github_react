import React, {
  useState,
  useRef,
  FC,
  Dispatch,
  SetStateAction,
  ChangeEvent,
} from "react";
import { BiChevronDown } from "react-icons/bi";
import { COUNTRY_LIST } from "constants/country";
import { Styled } from "./styled";

type TSelectCountryProps = {
  setLocation: Dispatch<SetStateAction<string>>;
  currentCountry: string;
  setCurrentCountry: Dispatch<SetStateAction<string>>;
};

export const SelectCountry: FC<TSelectCountryProps> = ({
  setLocation,
  currentCountry,
  setCurrentCountry,
}) => {
  const [showCountries, setShowCountries] = useState(false);
  const [countries, setCountries] = useState(COUNTRY_LIST);
  const inputRef = useRef<HTMLInputElement>(null);

  const showCountriesHandler = () => {
    if (!inputRef.current) {
      return;
    }

    if (showCountries === false) {
      inputRef.current.focus();
    }
  };

  const currentCountryHandler = (e: any) => {
    setCurrentCountry(e.target.textContent);
    setLocation(`location:${e.target.textContent.toLowerCase()}`);
  };

  const currentCountryInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentCountry(e.target.value);

    setCountries(
      COUNTRY_LIST.filter(
        (elem) =>
          elem.toLowerCase().indexOf(e.target.value.toLowerCase()) === 0 ||
          elem.toUpperCase().indexOf(e.target.value.toUpperCase()) === 0
      )
    );
  };

  const hideCountriesHandler = () => {
    setTimeout(() => {
      setShowCountries(false);
    }, 200);
  };

  return (
    <Styled.CountryField>
      <input
        type="text"
        ref={inputRef}
        value={currentCountry.toUpperCase()}
        onChange={currentCountryInputHandler}
        onBlur={hideCountriesHandler}
        onFocus={() => setShowCountries(true)}
        placeholder="Select country"
      />
      <BiChevronDown size="20" color="#cec8c6" onClick={showCountriesHandler} />
      {showCountries ? (
        <Styled.Countries>
          <Styled.CountriesList>
            {countries.map((country) => (
              <li key={country} onClick={currentCountryHandler}>
                {country}
              </li>
            ))}
          </Styled.CountriesList>
        </Styled.Countries>
      ) : (
        <Styled.CountriesList>
          {countries.map((country) => (
            <li key={country} onClick={currentCountryHandler}>
              {country}
            </li>
          ))}
        </Styled.CountriesList>
      )}
    </Styled.CountryField>
  );
};
