<template>
  <div class="q-pa-md">
    <q-table
      title="Application Management"
      :rows="mockRows"
      :columns="mockColumns"
      row-key="id"
    >
      <template v-slot:body-cell-form="props">
        <q-td :props="props">
          <q-icon
            :name="props.row.form ? 'check_circle_outline' : 'highlight_off'"
            :color="props.row.form ? 'green' : 'red'"
          />
        </q-td>
      </template>
      <template v-slot:body-cell-selfie="props">
        <q-td :props="props">
          <q-icon
            class="cursor-pointer"
            :name="props.row.selfie ? 'check_circle_outline' : 'highlight_off'"
            :color="props.row.selfie ? 'green' : 'red'"
            @click="$router.replace('/selfie')"
          />
        </q-td>
      </template>
      <template v-slot:body-cell-payment="props">
        <q-td :props="props">
          <q-icon
            :name="props.row.payment ? 'check_circle_outline' : 'highlight_off'"
            :color="props.row.payment ? 'green' : 'red'"
          />
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script lang="ts">
const mockColumns = [
  {
    name: 'id',
    required: true,
    label: 'Id',
    align: 'left',
    field: 'id',
    sortable: true,
  },
  {
    name: 'name',
    required: true,
    label: 'Name',
    align: 'left',
    field: 'name',
    sortable: true,
  },
  {
    name: 'company',
    required: true,
    label: 'Company',
    align: 'left',
    field: 'company',
    sortable: true,
  },
  {
    name: 'leader',
    required: true,
    label: 'Leader',
    align: 'left',
    field: 'leader',
    sortable: true,
  },
  {
    name: 'form',
    required: false,
    align: 'center',
    label: 'Form',
    field: 'form',
    sortable: true,
  },
  {
    name: 'selfie',
    required: false,
    align: 'center',
    label: 'Selfie',
    field: 'selfie',
    sortable: true,
  },
  {
    name: 'payment',
    required: false,
    align: 'center',
    label: 'Payment',
    field: 'payment',
    sortable: true,
  },
];

const mockRows = [
  {
    id: 1,
    name: 'Frozen Yogurt',
    company: 'Company A',
    leader: 'Leader A',
    form: true,
    selfie: true,
    payment: false,
  },
  {
    id: 2,
    name: 'Ice cream sandwich',
    company: 'Company B',
    leader: 'Leader B',
    form: false,
    selfie: true,
    payment: false,
  },
  {
    id: 3,
    name: 'Eclair',
    company: 'Company C',
    leader: 'Leader C',
    form: true,
    selfie: false,
    payment: false,
  },
  {
    id: 4,
    name: 'Cupcake',
    company: 'Company D',
    leader: 'Leader D',
    form: true,
    selfie: true,
    payment: false,
  },
  {
    id: 5,
    name: 'Gingerbread',
    company: 'Company E',
    leader: 'Leader E',
    form: true,
    selfie: true,
    payment: false,
  },
  {
    id: 6,
    name: 'Jelly bean',
    company: 'Company F',
    leader: 'Leader F',
    form: true,
    selfie: true,
    payment: false,
  },
  {
    id: 7,
    name: 'Lollipop',
    company: 'Company G',
    leader: 'Leader G',
    form: false,
    selfie: true,
    payment: false,
  },
  {
    id: 8,
    name: 'Honeycomb',
    company: 'Company H',
    leader: 'Leader H',
    form: true,
    selfie: true,
    payment: false,
  },
  {
    id: 9,
    name: 'Donut',
    company: 'Company I',
    leader: 'Leader I',
    form: true,
    selfie: false,
    payment: false,
  },
  {
    id: 10,
    name: 'KitKat',
    company: 'Company J',
    leader: 'Leader J',
    form: true,
    selfie: true,
    payment: false,
  },
];

export default {
  setup() {
    return {
      mockColumns,
      mockRows,
    };
  },
};
</script>
