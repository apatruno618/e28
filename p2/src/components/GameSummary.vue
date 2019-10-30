<template>
  <!-- single parent element rule, in this case its the div -->
  <div>
    <p>
      Game #: {{ number }}
      <br />
      Winner...: {{ winner }}
    </p>
    <!-- there are 2 arguments we can pass 
            1 is name of event we want to emit
    data we want passed as part of event-->
    <button @click="$emit('delete-round', number)">Delete round</button>
  </div>
</template>

<script>
// this is what gets exported to root vue instance
module.exports = {
  // returns the data as a function to allow for multiple game-summary in .html
  data: function() {
    return {};
  },
  // the details we want to display in component
  // use an object to specify data type and default value for the property
  props: {
    number: {
      type: Number,
      default: 0
    },
    winner: {
      type: String,
      default: ""
    }
  },
  // pass a string for what we want the component to be
  template: "#game-summary"
};
</script>

<style>
</style>
