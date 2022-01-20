import { renderBlock } from './lib.js';

export interface UserDate {
  userName: string;
  avatarUrl: string;
}

export type Amount = number;

export const getUserDate = (): unknown => {
  const user: string | null = localStorage.getItem('user');
  if (user) {
    return JSON.parse(user);
  }
  return 0;
}

export const getFavotiteAmount = (): unknown => {
  return localStorage.getItem('favoriteAmount');
}

export function renderUserBlock ({userName, avatarUrl}: UserDate, favoriteItemsAmount?: Amount) {
  const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems = favoriteItemsAmount ? true : false

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${avatarUrl}" alt="${userName}" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
