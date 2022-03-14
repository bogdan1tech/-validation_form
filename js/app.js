Vue.config.devtools = true;
 

Vue.use(vuelidate.default);

new Vue({
 
  el: '#js-form',
  data: {
    name: '',
    surname: '',
    middle_name: '',
    phone: 7,
    birth: '',
    gender: '',
    clients: '',
    doctor: [],
    checkbox: '',
    index: '',
    country: '',
    state: '',
    city: '',
    street: '',
    house: '',
    document: '',
    serial: '',
    number: '',
    issued: '',
    date_issued: '',
  },
  validations: {
    name: {
      required: validators.required,
      minLength: validators.minLength(1)
    },
    surname: {
      required: validators.required,
      minLength: validators.minLength(1)
    },
    middle_name: {},
    birth: {
      required: validators.required
    },
    phone: {
      required: validators.required,
      minLength: validators.minLength(11),
      maxLength: validators.maxLength(11),
      numeric: validators.numeric
    },
    gender: {
      required: validators.required
    },
    clients: {
      required: validators.required
    },
    doctor: {
      required: validators.required
    },
    index: {},
    country: {},
    state: {},
    city: {
      required: validators.required,
      minLength: validators.minLength(1)
    },
    street: {},
    house: {},
    document: {
      required: validators.required
    },
    serial: {},
    number: {},
    issued: {},
    date_issued: {
    required: validators.required
    },
  },


  methods: {
    submit: function() {
      if (this.$v.$invalid) return;
      // this.$el.submit();
      alert('Новый клиент успешно создан!');
    }
  }

});

    
