<template>
  <div>
    <div id="app" class="box">
      <ul class="tabs clearfix">
        <li 
        v-for="(tab,index) in tabsName" :key="index">
          <a
            href="javascript:;"
            class="tab-link"
            @click="tabsSwitch(index)"
            :class="{active:tab.isActive}"
          >{{tab.name}}</a>
        </li>
      </ul>

      <div class="cards">
        <div class="tab-card" style="display: block;"></div>
        <div class="tab-card"></div>
        <div class="tab-card">嗨，这里是Vue</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: {
    tabsName: [
      {
        name: "HTML",
        isActive: true
      },
      {
        name: "CSS",
        isActive: false
      },
      {
        name: "Vue",
        isActive: false
      }
    ],
    active: false
  },
  methods: {
    tabsSwitch: function(tabIndex) {
      var tabCardCollection = document.querySelectorAll(".tab-card"),
        len = tabCardCollection.length;

      for (var i = 0; i < len; i++) {
        tabCardCollection[i].style.display = "none";
        this.tabsName[i].isActive = false;
      }
      this.tabsName[tabIndex].isActive = true;
      tabCardCollection[tabIndex].style.display = "block";
    }
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}

.box {
  width: 800px;
  height: 200px;
  margin: 0 auto;
  border: 1px solid #000;
}

.tabs li {
  float: left;
  margin-right: 8px;
  list-style: none;
}

.tabs .tab-link {
  display: block;
  width: 250px;
  height: 49px;
  text-align: center;
  line-height: 49px;
  background-color: #5597b4;
  color: #fff;
  text-decoration: none;
}

.tabs .tab-link.active {
  height: 47px;
  border-bottom: 2px solid #e35885;
  transition: 0.3s;
}

.cards {
  float: left;
}

.cards .tab-card {
  display: none;
}

.clearfix:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}

.clearfix {
  zoom: 1;
}
</style>


