<template>
    <div>
        <h1>{{ part.title}}</h1>
        <div>
            >{{ part.description}}
        </div>
    </div>
</template>
<script>
import parts from '../data/parts';

export default {
  name: 'PartInfo',
  computed: {
    part() {
      const { partType, id } = this.$route.params;
      if (!partType || !id) {
        console.error('Missing partType or id in route params');
        return null;
      }
      const partList = parts[partType];
      return partList ? partList.find((part) => part.id === +id) : null;
    },
  },
};
</script>
