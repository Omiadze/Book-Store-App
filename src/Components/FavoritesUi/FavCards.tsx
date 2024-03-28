import React from 'react'

const FavCards = ({ item, onDelete }) => {
  const handleDelete = () => {
    onDelete()
  }

  return (
    // <section className="h-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
    // <div className="mx-auto px-4 sm:px-6 lg:px-8">
    // <div className="mx-auto mt-8 max-w-2xl md:mt-12">

    <div className="bg-white shadow w-[150px] md:w-[500px] sm:w-[400px]">
      <div className="px-4 py-6 sm:px-8 sm:py-10">
        <div className="flow-root">
          <ul className="-my-8">
            <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
              <div className="shrink-0">
                <img
                  className="h-200 w-24 max-w-full rounded-lg object-cover"
                  src={item.image}
                  alt=""
                />
              </div>

              <div className="relative flex flex-1 flex-col justify-between">
                <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                  <div className="pr-8 sm:pr-5">
                    <p className="text-base font-semibold text-gray-900">
                      {item.title}
                    </p>
                    <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                      {item.author}
                    </p>
                    <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                      {item.year}
                    </p>
                  </div>

                  <button
                    onClick={handleDelete}
                    type="button"
                    className="text-gray-900 bg-gradient-to-r from-light via-lime to-light hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    // </div>
    // </div>
    // </section>

    //
  )
}

export default FavCards
