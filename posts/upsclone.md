# UPS Clone

<div>
<video style="margin-left: auto; margin-right: auto; text-align: center" width="320" height="240" controls>
  <source src="/ups/demoups.mp4" type="video/mp4">
</video>
</div>

This is a mobile app for a courier company. It works on both Android and iOS platforms using React Native and is coded with TypeScript.

It features two tabs: one for customers and another for orders.

In the customers tab, you can search by name and also view all the orders associated with them.

In the orders tab, you can manage packages and filter them by date.

The data for each order is extracted from the database hosted in Firebase. Orders also include an integrated map.

The frontend is responsive, achieved through TailwindCSS, while the backend has been developed using GraphQL/Apollo for API calls. Firebase has been used for the database.