<template>

<div class="content">
    <button class="add-to-cart" @click="addToCart()"> Add to cart</button>
    <div class="top-row">
      <div :class="[saleBorderClass, 'top', 'part']">
        <div class="robot-name">{{ selectedRobot.head.title }}
            <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
        </div>
        <img :src="selectedRobot.head.src" title="head"/>
        <button v-on:click="selectPreviousHead()" class="prev-selector">&#9668;</button>
        <button  v-on:click="selectNextHead()" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img :src="selectedRobot.leftArm.src" title="lef arm"/>
        <button v-on:click="selectPreviousLeftArm()" class="prev-selector">&#9650;</button>
        <button v-on:click="selectNextLeftArm()" class="next-selector">&#9660;</button>
      </div>
      <div class="center part">
        <img :src="selectedRobot.torso.src" title="torso"/>
        <button v-on:click="selectPreviousTorso()"  class="prev-selector">&#9668;</button>
        <button v-on:click="selectNextTorso()" class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img :src="selectedRobot.rightArm.src" title="right arm"/>
        <button v-on:click="selectPreviousRightArm()"  class="prev-selector">&#9650;</button>
        <button v-on:click="selectNextRightArm()"  class="next-selector">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img :src="selectedRobot.base.src" title="base"/>
        <button v-on:click="selectPreviousBase()" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNextBase()" class="next-selector">&#9658;</button>
      </div>
    </div>
<div>
    <h1 style="text-align: left">Cart</h1>
    <table>
        <thead>
        <tr>
            <th>Robot</th>
            <th class="cost">Cost</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(robot, index) in cart" :key="index">
            <td>{{robot.head.title}}</td>
            <td class="cost">{{robot.cost}}</td>
        </tr>
    </tbody>
</table>
</div>
  </div>
</template>

<script>
import availableParts from '../data/parts';
import createdHookMixin from './created-hook-mixin';

function getPrevuiousValidIndex(index, length) {
  const deprecatedIndex = index - 1;
  return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
}

function getNextValidIndex(index, length) {
  const incremementIndex = index + 1;
  return incremementIndex > length - 1 ? 0 : incremementIndex;
}
export default {
  name: 'RobotBuilder',
  data() {
    return {
      cart: [],
      availableParts,
      selectedHeadIndex: 0,
      selectedLeftArmIndex: 0,
      selectedRightArmIndex: 0,
      selectedTorsoIndex: 0,
      selectedBaseIndex: 0,
    };
  },
  mixins: [createdHookMixin],
  methods: {
    addToCart() {
      const robot = this.selectedRobot;
      const cost = robot.head.cost + robot.rightArm.cost + robot.leftArm.cost +
      robot.torso.cost + robot.base.cost;
      this.cart.push({ ...robot, cost });
    },
    selectNextHead() {
      this.selectedHeadIndex =
      getNextValidIndex(this.selectedHeadIndex, availableParts.heads.length);
      console.log('next');
    },
    selectPreviousHead() {
      this.selectedHeadIndex =
      getPrevuiousValidIndex(this.selectedHeadIndex, availableParts.heads.length);
    },
    selectNextLeftArm() {
      this.selectedLeftArmIndex =
      getNextValidIndex(this.selectedLeftArmIndex, availableParts.arms.length);
      console.log('next');
    },
    selectPreviousLeftArm() {
      this.selectedLeftArmIndex =
      getPrevuiousValidIndex(this.selectedLeftArmIndex, availableParts.arms.length);
    },
    selectNextRightArm() {
      this.selectedRightArmIndex =
      getNextValidIndex(this.selectedRightArmIndex, availableParts.arms.length);
      console.log('next');
    },
    selectPreviousRightArm() {
      this.selectedRightArmIndex =
      getPrevuiousValidIndex(this.selectedRightArmIndex, availableParts.arms.length);
    },
    selectNextTorso() {
      this.selectedTorsoIndex =
      getNextValidIndex(this.selectedTorsoIndex, availableParts.torsos.length);
      console.log('next');
    },
    selectPreviousTorso() {
      this.selectedTorsoIndex =
      getPrevuiousValidIndex(this.selectedTorsoIndex, availableParts.torsos.length);
    },
    selectNextBase() {
      this.selectedBaseIndex =
      getNextValidIndex(this.selectedBaseIndex, availableParts.bases.length);
      console.log('next');
    },
    selectPreviousBase() {
      this.selectedBaseIndex =
      getPrevuiousValidIndex(this.selectedBaseIndex, availableParts.bases.length);
    },
  },
  computed: {
    saleBorderClass() {
      return this.selectedRobot.head.onSale ? 'sale-border' : '';
    },
    headBorderStyle() {
      return { border: this.selectedRobot.head.onSale ? '3px solid red' : '3px solid #aaa' };
    },
    selectedRobot() {
      return {
        head: availableParts.heads[this.selectedHeadIndex],
        leftArm: availableParts.arms[this.selectedLeftArmIndex],
        rightArm: availableParts.arms[this.selectedRightArmIndex],
        torso: availableParts.torsos[this.selectedTorsoIndex],
        base: availableParts.bases[this.selectedBaseIndex],
      };
    },
  },
};
</script>

<style scoped>

.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
}
.part img {
  width:165px;
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
  position: absolute;
  top:-25px;
  text-align: center;
  width: 100%;
}
.sale{
    color: red;
}
.content{
    position: relative;
}
.add-to-cart{
    position: absolute;
    right:30px;
    width: 220px;
    padding:3px;
    font-size: 16px;
}
td, th{
    text-align: left;
    padding: 5px;
    padding-right:20px;
}
.cost{
    text-align:right;
}
.sale-border{
    border: 3px solid red;
}
</style>
