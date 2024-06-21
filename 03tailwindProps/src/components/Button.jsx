import React from 'react'

function Button({username}) {
    console.log(username);
  return (
    <div class="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
  <button
    type="button"
    class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
  >
    Button text
  </button>
  <button
    type="button"
    class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
  >
    Button text
  </button>
</div>

  )
}

export default Button