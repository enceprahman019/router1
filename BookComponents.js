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
          id: 12,
          title: 'Belajar Matematika',
          description: 'Belajar rumus-rumus secara cepat',
          authors: 'jhon Doe',
          publish_year: 2019,
          price: 100000,
          Image: '',
        },
        {
          id: 12,
          title: 'Belajar Matematika',
          description: 'Belajar rumus-rumus secara cepat',
          authors: 'jhon Doe',
          publish_year: 2019,
          price: 100000,
          Image: '',
        },
      ],
    };
  },
  computed: {
    book() {
      return this.books.filter((book) => {
        return book.id === parseInt(this.$route.params.id);
      })[0];
    },
  },
  template: `
        <div v-if="book">
            <h1>Buku {{ book.title }}</h1>
            <ul>
                <li v-for="(num, value) of book">
                    {{ value +' : '+ }} <br>
                <li>
            </ul>
            </div>
            `,
};
