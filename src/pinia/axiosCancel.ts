import {defineStore} from 'pinia';
import {reactive} from 'vue';

interface RequestDataInterface {
  key: string,
  cancel: any
}

export const axiosCancel = defineStore('axiosCancel', () => {
  const cancelRequestList = reactive(new Map());
  function handleRequest(requestData: RequestDataInterface) {
    if (cancelRequestList.has(requestData.key)) {
      const cancel = cancelRequestList.get(requestData.key);
      cancel && cancel();
    }
    cancelRequestList.set(requestData.key, requestData.cancel);
  }
  return {cancelRequestList, handleRequest};
});
