const triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'));
triggerTabList.forEach((triggerEl) => {
  const tabTrigger = new mdb.Tab(triggerEl);

  triggerEl.addEventListener('click', (event) => {
    event.preventDefault();
    tabTrigger.show();
  });
});

const triggerEl = document.querySelector('#myTab a[href="#profile"]');
mdb.Tab.getInstance(triggerEl).show(); // Select tab by name

const triggerFirstTabEl = document.querySelector('#myTab li:first-child a');
mdb.Tab.getInstance(triggerFirstTabEl).show(); // Select first tab