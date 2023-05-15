import React from 'react';
import AddThreadInput from '../components/AddThreadInput';

function AddPage() {
  return (
    <section className="w-full p-4 mb-40 max-w-3xl mx-auto bg-white  dark:bg-gray-900 pt-20">
      <h1 className="text-2xl sm:text-3xl mt-4 dark:text-gray-100">Create a new discussion</h1>
      <AddThreadInput />
    </section>
  );
}

export default AddPage;
