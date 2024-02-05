const categoryList = document.querySelector('.category-list');
const playBetterList = document.querySelector('.play-better-list');
const usefulLinksList = document.querySelector('.useful-links-list');
const gidesTipsList = document.querySelector('.tablet-list');

const gidesTopsItemsData = [
  {
    title: 'item 1',
  },
  {
    title: 'item 3',
  },
  {
    title: 'item 4',
  },
  {
    title: 'item 5',
  },
  {
    title: 'item 6',
  },
];

const categoryItemsData = [
  {
    title: 'item 1',
  },
  {
    title: 'item 3',
  },
  {
    title: 'item 4',
  },
  {
    title: 'item 5',
  },
  {
    title: 'item 6',
  },
];

const playBetterItemsData = [
  {
    title: 'item 1',
  },
  {
    title: 'item 2',
  },
  {
    title: 'item 3',
  },
  {
    title: 'item 4',
  },
  {
    title: 'item 5',
  },
  {
    title: 'item 6',
  },
];

const usefulLinksData = [
  { title: 'link' },
  { title: 'link' },
  { title: 'link' },
  { title: 'link' },
];

const markup = data => {
  const result = data
    .map(
      item => `
 <li class="footer-category-item">
          <a href="#"> ${item.title}</a>
        </li>`
    )
    .join('');

  return result;
};

const categoryItems = markup(categoryItemsData);
const playBetterItems = markup(playBetterItemsData);
const usefulLinks = markup(usefulLinksData);
const gidesTipsItems = markup(gidesTopsItemsData);

categoryList.innerHTML = categoryItems;
playBetterList.innerHTML = playBetterItems;
usefulLinksList.innerHTML = usefulLinks;
gidesTipsList.innerHTML = gidesTipsItems;
