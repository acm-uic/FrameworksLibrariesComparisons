<template>
  <div class="usermanager">
    <div class="mx-auto input-group" style="text-align: center;">
        <input v-model="searchField" v-on:input="onSearch();" type="search" name="search" id="search" class="form-control" placeholder="Search Here!">
    </div>
    <div class="input-group mx-auto my-3">
        <input v-model="fnameField" type="text" name="fname" id="fname" class="form-control" placeholder="First Name">
        <input v-model="lnameField" type="text" name="lname" id="lname" class="form-control" placeholder="Last Name">
        <input v-model="emailField" type="email" name="email" id="email" class="form-control" placeholder="E-Mail">
        <div class="input-group-append">
            <button class="btn btn-outline-success" v-on:click="onCreate();">Create User</button>
        </div>
        
    </div>
    <hr>
    <div id="user-list" v-if="!isSearching">
        <div class="card my-3" v-for="user in userList" :key="user.id">
            <div class="card-body">
                <h5 class="card-title">{{user.fname}} {{user.lname}}</h5>
                <p class="card-text d-inline-block">{{user.id}}</p>
                <p class="card-text float-right">{{user.email}}</p>
            </div>
            <div class="card-footer">
                <div class="float-right">
                    <button class="btn btn-outline-danger" v-on:click="onDelete(user.id);">Delete</button>
                </div>
            </div>
        </div>
    </div>
    <div id="user-list" v-else>
        <div class="card my-3" v-for="user in searchList" :key="user.id">
            <div class="card-body">
                <h5 class="card-title">{{user.fname}} {{user.lname}}</h5>
                <p class="card-text d-inline-block">{{user.id}}</p>
                <p class="card-text float-right">{{user.email}}</p>
            </div>
            <div class="card-footer">
                <div class="float-right">
                    <button class="btn btn-outline-danger" v-on:click="onDelete(user.id);">Delete</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
function User(id, fname, lname, email){
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.email = email;
}



export default {
  name: 'usermanager',
  data: function (){
    return {
      userList: [new User(1, "John", "Snow", "jsnow@acmuic.org"),new User(2, "Christian", "Bingman", "cbingm@acmuic.org")],
      searchList: [],
      isSearching: false,
      searchField: '',
      fnameField: '',
      lnameField: '',
      emailField: ''
    }
  },
  methods: {
    onDelete: function (id) {
      this.userList = this.userList.filter(el => el.id != id);
    },
    onCreate: function () {
      this.userList.push(new User(this.userList.length == 0 ? 1 : this.userList[this.userList.length-1].id + 1, this.fnameField, this.lnameField, this.emailField))
    },
    onSearch: function () {
      if(this.searchField != ''){
        this.isSearching = true;
        this.searchList = this.userList.filter(el => el.email.includes(this.searchField));
      }else{
        this.isSearching = false;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
