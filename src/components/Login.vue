<template>
  <div class="container">
    <Col span="5" align="center" class="text">
      <!--<div v-bind:class="{'element-card' : true,'open' : rotaIndex == index}" v-on:click="clickCard(index)">-->
      <div v-bind:class="{'element-card' : true ,'open':this.tologin===true||this.toregister===true}">
        <div class="front-facing">
          <!--<router-link :to="{ name:'detail',params:{id:book.id}}">详情</router-link>-->
          <br><br><br>请先注册<br>
          <Button type="success" long @click="register_switch">注册</Button>
          <br><br>或者您已拥有账号<br>
          <Button type="success" long @click="login_switch">登陆</Button>
        </div>
        <div v-bind:class="{'back-facing':true,'register':this.toregister===true}">
          <div v-if="tologin">
            <i-form ref="formInline" :model="formInline" :rules="ruleInline" inline>
              <FormItem prop="userName" label-position="left">
                <Input v-model="formInline.userName" placeholder="用户名" style="{left:10px}"></Input>
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </FormItem>
              <FormItem prop="password" label-position="left">
                <Input v-model="formInline.password" placeholder="密码" style="{left:10px}"></Input>
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </FormItem>
              <!--<Button type="success" long @click="handleSubmit('formInline')" @click="login(formInline)">登陆</Button>-->
              <Button type="success" long @click="login(formInline)">登陆</Button>
              <br><br>
              <Button type="error" long @click="login_switch">返回</Button>
            </i-form>
          </div>
          <div v-if="toregister">
            <i-form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
              <FormItem label="用户名" prop="userName" label-position="left" style="height: 10px">
                <Input v-model="formValidate.userName" placeholder="输入你的用户名"></Input>
              </FormItem>
              <FormItem label="密码" prop="password" label-position="left" style="height: 10px">
                <Input v-model="formValidate.password" placeholder="输入你的密码"/>
              </FormItem>
              <FormItem label="学院" label-position="left" style="height: 10px">
                <Input v-model="formValidate.college" placeholder="输入你的学院"/>
              </FormItem>
              <FormItem label="手机号" label-position="left" style="height: 10px">
                <Input v-model="formValidate.phoneNumber" placeholder="输入你的手机号"/>
              </FormItem>
              <!--<Upload-->
              <!--multiple-->
              <!--type="drag"-->
              <!--action="//jsonplaceholder.typicode.com/posts/">-->
              <!--<div style="padding: 20px 0">-->
              <!--<Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>-->
              <!--<p>Click or drag files here to upload</p>-->
              <!--</div>-->
              <!--</Upload>-->
              <FormItem>
                <Button type="primary" @click="register()">提交</Button>
                <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
              </FormItem>
              <Button type="error" long @click="register_switch">返回</Button>
            </i-form>
          </div>
        </div>
      </div>
    </Col>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';

  export default {

    name: 'List',
    computed: {
      ...mapGetters({
        user: 'user'
      })
    },
    data() {
      return {
        isActive: true,
        tologin: false,
        toregister: false,
        rotaIndex: -1,
        formInline: {
          userName: '',
          password: ''
        },
        ruleInline: {
          userName: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {type: 'string', min: 6, message: '密码长度不能少于6个字符', trigger: 'blur'}
          ]
        },
        formValidate: {
          userName: '',
          password: '',
          headImageUrl: '',
          college: '',
          phoneNumber: 0
        },
        ruleValidate: {
          userName: [
            {required: true, message: '用户名不能为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'}
          ],
        }
      }
    },

    methods: {
      clickCard: function (index) {
        this.rotaIndex = this.rotaIndex == index ? -1 : index;
      },
      login_switch() {
        if (this.tologin == true)
          this.tologin = false;
        else if (this.tologin == false)
          this.tologin = true;
      },
      login(formInline) {
        if (this.formInline.userName !== '' && this.formInline.password.length >= 6) {
          this.$store.dispatch('login', {
            userName: formInline.userName,
            password: formInline.password
          });
        } else {
          alert('请输入正确的用户名和密码！');
        }

      },
      register_switch() {
        console.log("before" + this.toregister);
        if (this.toregister == true)
          this.toregister = false;
        else if (this.toregister == false)
          this.toregister = true;
      },
      register() {
        if (this.formValidate.userName !== '' && this.formValidate.password.length >= 6) {
          this.$store.dispatch('register', {
            userName: this.formValidate.userName,
            password: this.formValidate.password,
            headImageUrl: this.formValidate.headImageUrl,
            college: this.formValidate.college,
            phoneNumber: this.formValidate.phoneNumber
          });
        } else {
          alert('请输入正确的用户名和密码！');
        }
      },
      handleReset(name) {
        this.$refs[name].resetFields();
      }
    }
  }
</script>
<style>

  .element-card .back-facing.register {
  }

</style>

