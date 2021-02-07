import {
  observable,
  action
} from 'mobx';
import { userClient } from "../utils/clients";

class UserStore {
  @observable users = [];
  @observable loading = false;
  @observable openModal = false;
  @observable currentUser = null;

  @action
  async listUser() {
    try {
      this.loading = true;
      this.users = [];
      const response = await userClient.get('/users');
      console.log(response.data)
      this.users = response.data
    } catch (e) {
      console.log(e)
    } finally {
      this.loading = false;
    }
  }

  @action
  openCreate() {
    this.currentUser = null;
    this.openModal = true;
  }

  @action
  async saveUpdateUser(user) {
    try {
      this.loading = true;
      if (!user.id) {
        Object.assign(user, {
          id: Date.now()
        })

        await userClient.post('/users', user)
      } else {
        await userClient.put(`/users/${user.id}`, user)
      }
    } catch (e) {
    } finally {
      await this.listUser();
      this.openModal = false;
      this.currentUser = null;
      this.loading = false;
    }
  }

  @action
  getUserAndEdit (user) {
    this.currentUser = user;
    this.openModal = true;
  }

  @action
  resetUser () {
    this.openModal = false;
    this.currentUser = null;
  }
}

export const userStore = new UserStore()