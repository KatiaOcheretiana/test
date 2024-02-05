import articleImage from '../images/articles/article.jpg';
import articleImage2X from '../images/articles/article_2x.jpg';

const articlesList = document.querySelector('.similar-list');

const articlesData = [
  {
    title: 'Lorem Ipsum is simply dummy',
    author: 'Alco',
    date: '26 janvier 2023',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: articleImage,
    img2x: articleImage2X,
    width: 310,
  },
  {
    title: 'Lorem Ipsum is simply dummy',
    author: 'Alco',
    date: '26 janvier 2023',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: articleImage,
    img2x: articleImage2X,
    width: 310,
  },
  {
    title: 'Lorem Ipsum is simply dummy',
    author: 'Alco',
    date: '26 janvier 2023',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: articleImage,
    img2x: articleImage2X,
    width: 310,
  },
  {
    title: 'Lorem Ipsum is simply dummy',
    author: 'Alco',
    date: '26 janvier 2023',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: articleImage,
    img2x: articleImage2X,
    width: 310,
  },
];

const createMarkup = data => {
  const markup = data
    .map(
      item =>
        ` <li class="article-item"><a href="#">
      <img
        class="article-img"
        srcset="
        ${item.img}, 
         ${item.img2x}
      "
        src=" ${item.img}"
        alt="${item.title}"
        width="${item.width}"
      />
      <div class="add-content"> <h3 class="item-title">${item.title} </h3> 
      <div class="add-info">
      <p><svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 10.1484C10 8.09375 9.49219 5.71875 7.44531 5.71875C6.8125 6.33594 5.95312 6.71875 5 6.71875C4.04688 6.71875 3.1875 6.33594 2.55469 5.71875C0.507812 5.71875 0 8.09375 0 10.1484C0 11.2891 0.75 12.2188 1.66406 12.2188H8.33594C9.25 12.2188 10 11.2891 10 10.1484ZM8 3.21875C8 1.5625 6.65625 0.21875 5 0.21875C3.34375 0.21875 2 1.5625 2 3.21875C2 4.875 3.34375 6.21875 5 6.21875C6.65625 6.21875 8 4.875 8 3.21875Z" fill="#B3B3B1" />
</svg> ${item.author}</p>
<p><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 3.25C7 3.10938 6.89063 3 6.75 3H6.25C6.10938 3 6 3.10938 6 3.25V6H4.25C4.10938 6 4 6.10938 4 6.25V6.75C4 6.89063 4.10938 7 4.25 7H6.75C6.89063 7 7 6.89063 7 6.75V3.25ZM10.25 6C10.25 8.34375 8.34375 10.25 6 10.25C3.65625 10.25 1.75 8.34375 1.75 6C1.75 3.65625 3.65625 1.75 6 1.75C8.34375 1.75 10.25 3.65625 10.25 6ZM12 6C12 2.6875 9.3125 0 6 0C2.6875 0 0 2.6875 0 6C0 9.3125 2.6875 12 6 12C9.3125 12 12 9.3125 12 6Z" fill="#B3B3B1" />
</svg> ${item.date}</p>
</div>
</div></a>
    </li>`
    )
    .join('');

  return markup;
};

const markup = createMarkup(articlesData);

articlesList.innerHTML = markup;
