import { renderSearchFormBlock, search, handlerForm } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock, getUserDate, getFavotiteAmount, UserDate, Amount } from './user.js'
import { renderToast } from './lib.js'

window.addEventListener('DOMContentLoaded', () => {
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('favoriteAmount', '7');

  const userDate = getUserDate();
  const favoriteAmount = getFavotiteAmount();


  renderUserBlock(userDate as UserDate, favoriteAmount as Amount)
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
      {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
      {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )

  const form: HTMLFormElement | null = document.querySelector('form');
  
  if (form) {
    form.addEventListener('submit', evt => {evt.preventDefault();
      const formData = handlerForm();
      search(formData);
    })
  }

});

const user = {
  userName: 'Bob Dilan',
  avatarUrl: '/img/avatar.png',
}

