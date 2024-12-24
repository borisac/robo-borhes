<template>
    <div>
        <h1>{{ part.title}}</h1>
        <div>
            >{{ part.description}}
        </div>
    </div>
</template>
<script>
import getPartsMixin from './get-parts-mixin';

export default {
  name: 'PartInfo',
  mixins: [getPartsMixin],
  props: {
    partType: { type: String },
    id: {
      type: [Number, String],
      validator(value) {
        return Number.isInteger(Number(value));
      },
    },
  },
  computed: {
    part() {
      const { partType, id } = this;
      if (!partType || !id) {
        console.error('Missing partType or id in route params');
        return null;
      }
      const partList = this.parts[partType];
      return partList ? partList.find((part) => part.id === +id) : null;
    },
  },
};
</script>
