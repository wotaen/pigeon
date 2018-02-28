<template>
  <input type="text" :placeholder="placeholder" v-model="value"/>
</template>

<script>
  export default {
    name: 'sn-input',
    props: ['initial', 'placeholder'],
    data: function () {
      return {
        value: ''
      }
    },
    methods: {
      format: function(str) {
        //normalize
        str = str.replace('l','1').replace('o','0').replace('O','0').replace(/[^0-9A-F]/gi,'').toUpperCase()

        //add space after 4 chars, also makes sure that no more than 16 chars are entered
        var chunks = []
        for(var i=0;i<4;i++) {
          chunks.push(str.substr(i*4, 4))
        }

        return this.rtrim(chunks.join(' '))
      },
      rtrim: function (str) {
        return str.replace(/ +$/g, "")
      },
    },
    mounted() {
      this.value = this.format(this.initial || '')
    },
    watch: {
      value: function(newValue) {
        this.value = this.format(newValue)
      }
    }
  }
</script>
