export const Bookscomponent = {
  data() {
    return {
      books: [
        {
          id: 12,
          title: 'Belajar Matematika',
          description: 'Belajar rumus-rumus secara cepat',
          authors: 'jhon Doe',
          publish_year: 2019,
          price: 100000,
          Image: '',
        },
        {
          id: 13,
          title: 'Belajar Bahasa Inggris',
          description: 'Belajar Berbahasa inggris ',
          authors: 'jhon Doe',
          publish_year: 2019,
          price: 500000,
          Image: '',
        },
        {
          id: 12,
          title: 'Belajar Bahasa indonesia',
          description: 'Belajar rumus-rumus secara cepat',
          authors: 'jhon Doe',
          publish_year: 2019,
          price: 100000,
          Image: '',
        },
      ],
    };
    },
  template: `
        <div>
            <h1>Daftar Buku </h1>
       <ul>
        <li v-for="book of books">
        <router-link :to="'/book/'+book.id">
        {{ book.tittle }}
        </router-link>
        </li>
       </ul>
        </div>
            `,
};
