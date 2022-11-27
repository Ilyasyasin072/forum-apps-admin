<template>
  <component-manage-user-page/>
</template>

<script>
import TableUser from "../../../components/user/TableUser";

export default {
  name: 'PageManageUser',
  components: {
    'component-manage-user-page': TableUser
  }
}
</script>
