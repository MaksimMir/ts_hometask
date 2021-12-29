import { renderBlock } from './lib.js';

const setDate = (day: number): string => {
  const newDay = new Date().setDate(new Date().getDate() + day);
  const date =  new Date(newDay).toISOString().split('T');
  return date[0];
}



const ENTRY_DATE = setDate(1);
const DEPARTTURE_DATE = setDate(3);
const MIN_DATE = new Date();
const MAX_DATE = setDate(60);

interface SearchFormData {
  city: string;
  entryDate: string;
  departureDate: string;
  price: string;
}

export const handlerForm = () => {
  return {
    city: document.getElementById('city').getAttribute('value'),
    entryDate: document.getElementById('check-in-date').getAttribute('value'),
    departureDate: document.getElementById('check-out-date').getAttribute('value'),
    price: document.getElementById('max-price').getAttribute('value'),
  }
}

export const search = (obj: SearchFormData): void => {
  console.log(obj);
}

export function renderSearchFormBlock (entryDate: string = ENTRY_DATE, departureDate: string = DEPARTTURE_DATE): void {

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${entryDate}" min="${MIN_DATE}" max="${MAX_DATE}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${departureDate}" min="${MIN_DATE}" max="${MAX_DATE}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
