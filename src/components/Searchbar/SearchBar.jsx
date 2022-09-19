import {Component} from "react";
import style from './SearchBar.module.css';


export class SearchBar extends Component {
  render = () => {
    return (
      <header className={style.SearchBar}>
        <form className={style.SearchForm}>
          <button type="submit" className={style.SearchFormButton}>
            <span className={style.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={style.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    )
  }
}
