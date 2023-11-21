import { ref } from 'vue'

/**
 * base on vuetify snackbar to toast message
 */
export function useToast() {
  const toast = ref(false)
  const toastMessage = ref('')
  const toastColor = ref('')

  function showToast(message: string, color: string, duration = 3000) {
    toast.value = true
    toastMessage.value = message
    toastColor.value = color

    setTimeout(() => {
      toast.value = false
    }, duration)
  }

  return {
    toast,
    toastMessage,
    showToast,
    toastColor
  }
}