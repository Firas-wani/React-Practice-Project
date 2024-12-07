
// import React, { useState, useEffect } from "react";

// import api from "../utils/AxiosInstance";
// import Authorized from "../authorized/Authorized";

// const UserDashboard = () => {
//   Authorized();
//   const [user, setUser] = useState({});
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedOrder, setSelectedOrder] = useState(null);

//   const getUser = async () => {
//     if (loading) return; // Prevent multiple simultaneous calls

//     try {
//       setLoading(true);
//       const res = await api.get("/user/getuser");
//       setUser(res.data.message.userdetails);
//       setOrders(res.data.message.userdetails.orders);
//     } catch (error) {
//       console.error("Error fetching user details:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getUser();
//   }, []); // Empty dependency array to run only once on mount

//   // Handle the cancellation of an order
//   const handleCancelOrder = async () => {
//     try {
//       // Simulating API request to update the order status
//       console.log("Requesting cancellation for order ID:", selectedOrder._id);

//       // Here you would typically make an API request to update the order status
//       // const response = await api.post('/cancel-order', { orderId: selectedOrder._id });

//       // Update the order status to "Cancellation Requested"
//       setOrders((prevOrders) =>
//         prevOrders.map((order) =>
//           order._id === selectedOrder._id
//             ? { ...order, status: "Cancellation Requested" }
//             : order
//         )
//       );

//       setShowModal(false); // Close the modal after status update
//     } catch (error) {
//       console.error("Error requesting cancellation:", error);
//     }
//   };

//   return (
//     <div className="container pt-5 pb-5" style={{ minHeight: "80vh" }}>
//       {/* User Details Card */}
//       <div className="row mt-5 mb-2">
//         <div className="col-md-6 mt-4">
//           <Card>
//             <Card.Body>
//               <Card.Title>User Details</Card.Title>
//               {user ? (
//                 <>
//                   <p>
//                     <strong>Name:</strong> {user.username}
//                   </p>
//                   <p>
//                     <strong>Email:</strong> {user.email}
//                   </p>
//                   <Button
//                     variant="primary"
//                     onClick={() => alert("Edit User Info")}
//                   >
//                     Edit Profile
//                   </Button>
//                 </>
//               ) : (
//                 <p>Loading user details...</p>
//               )}
//             </Card.Body>
//           </Card>
//         </div>
//       </div>

//       {/* Orders Table */}
//       <div className="row">
//         <div className="col-md-12">
//           <Card>
//             <Card.Body>
//               <Card.Title>Order History</Card.Title>
//               {orders.length > 0 ? (
//                 <Table striped bordered hover>
//                   <thead>
//                     <tr>
//                       <th>#Order Id</th>
//                       <th>Order Date</th>
//                       <th>Status</th>
//                       <th>Products</th>
//                       <th>Quantity</th>
//                       <th>Order Price</th>
//                       <th>Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {orders.map((order) => {
//                       let totalOrderPrice = 0;

//                       return (
//                         <React.Fragment key={order._id}>
//                           {/* Single row showing order details and products */}
//                           <tr>
//                             <td rowSpan={1}>{order._id}</td>
//                             <td rowSpan={1}>
//                               {new Date(order.createdAt).toLocaleDateString()}
//                             </td>
//                             <td rowSpan={1}>{order.status}</td>
//                             <td>
//                               {order.products.map((productItem) => {
//                                 totalOrderPrice +=
//                                   productItem.price * productItem.quantity;

//                                 return (
//                                   <div
//                                     key={productItem._id}
//                                     className="d-flex align-items-center"
//                                   >
//                                     <Image
//                                       src={productItem.productId.imageUrl}
//                                       alt={productItem.productId.title}
//                                       rounded
//                                       style={{
//                                         width: "50px",
//                                         height: "50px",
//                                         marginRight: "10px",
//                                       }}
//                                     />
//                                     <div>{productItem.productId.title}</div>
//                                   </div>
//                                 );
//                               })}
//                             </td>
//                             <td>
//                               {order.products.reduce(
//                                 (total, product) => total + product.quantity,
//                                 0
//                               )}
//                             </td>
//                             <td rowSpan={1}>₹{totalOrderPrice} INR</td>
//                             <td>
//                               <Button
//                                 variant="danger"
//                                 onClick={() => {
//                                   setSelectedOrder(order);
//                                   setShowModal(true);
//                                 }}
//                               >
//                                 Cancel Order
//                               </Button>
//                             </td>
//                           </tr>
//                         </React.Fragment>
//                       );
//                     })}
//                   </tbody>
//                 </Table>
//               ) : (
//                 <p>No orders available.</p>
//               )}
//             </Card.Body>
//           </Card>
//         </div>
//       </div>

//       {/* Confirmation Modal for Cancelling Order */}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Cancel Order</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Are you sure you want to request the cancellation of this order? This
//           action will update the order status.
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Close
//           </Button>
//           <Button variant="danger" onClick={handleCancelOrder}>
//             Request Cancellation
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default UserDashboard;


// import React, { useState, useEffect } from "react";
// import { Card, Button, Table, Modal, Image } from "react-bootstrap";
// import api from "../utils/AxiosInstance";
// // import Authorized from "../authorized/Authorized";

// const UserDashboard = () => {
// //   Authorized();
//   const [user, setUser] = useState({});
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedOrder, setSelectedOrder] = useState(null);

//   const getUser = async () => {
//     if (loading) return; // Prevent multiple simultaneous calls

//     try {
//       setLoading(true);
//       const res = await api.get("/user/getuser");
//       setUser(res.data.message.userdetails);
//       setOrders(res.data.message.userdetails.orders);
//     } catch (error) {
//       console.error("Error fetching user details:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getUser();
//   }, []); // Empty dependency array to run only once on mount

//   // Handle the cancellation of an order
//   const handleCancelOrder = async () => {
//     try {
//       console.log("Requesting cancellation for order ID:", selectedOrder._id);

//       // Update the order status to "Cancellation Requested"
//       setOrders((prevOrders) =>
//         prevOrders.map((order) =>
//           order._id === selectedOrder._id
//             ? { ...order, status: "Cancellation Requested" }
//             : order
//         )
//       );

//       setShowModal(false); // Close the modal after status update
//     } catch (error) {
//       console.error("Error requesting cancellation:", error);
//     }
//   };

//   return (
//     <div className="container pt-5 pb-5" style={{ minHeight: "80vh" }}>
//       {/* User Details Card */}
//       <div className="row mt-5 mb-2">
//         <div className="col-md-6 mt-4">
//           <Card>
//             <Card.Body>
//               <Card.Title>User Details</Card.Title>
//               {user ? (
//                 <>
//                   <p>
//                     <strong>Name:</strong> {user.username}
//                   </p>
//                   <p>
//                     <strong>Email:</strong> {user.email}
//                   </p>
//                   <Button variant="primary" onClick={() => alert("Edit User Info")}>
//                     Edit Profile
//                   </Button>
//                 </>
//               ) : (
//                 <p>Loading user details...</p>
//               )}
//             </Card.Body>
//           </Card>
//         </div>
//       </div>

//       {/* Orders Table */}
//       <div className="row">
//         <div className="col-md-12">
//           <Card>
//             <Card.Body>
//               <Card.Title>Order History</Card.Title>
//               {orders.length > 0 ? (
//                 <Table striped bordered hover>
//                   <thead>
//                     <tr>
//                       <th>#Order Id</th>
//                       <th>Order Date</th>
//                       <th>Status</th>
//                       <th>Products</th>
//                       <th>Quantity</th>
//                       <th>Order Price</th>
//                       <th>Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {orders.map((order) => {
//                       let totalOrderPrice = 0;

//                       return (
//                         <tr key={order._id}>
//                           <td>{order._id}</td>
//                           <td>{new Date(order.createdAt).toLocaleDateString()}</td>
//                           <td>{order.status}</td>
//                           <td>
//                             {order.products.map((productItem) => {
//                               totalOrderPrice +=
//                                 productItem.price * productItem.quantity;

//                               return (
//                                 <div
//                                   key={productItem._id}
//                                   className="d-flex align-items-center mb-2"
//                                 >
//                                   <Image
//                                     src={productItem.productId.imageUrl}
//                                     alt={productItem.productId.title}
//                                     rounded
//                                     style={{
//                                       width: "50px",
//                                       height: "50px",
//                                       marginRight: "10px",
//                                     }}
//                                   />
//                                   <span>{productItem.productId.title}</span>
//                                 </div>
//                               );
//                             })}
//                           </td>
//                           <td>
//                             {order.products.reduce(
//                               (total, product) => total + product.quantity,
//                               0
//                             )}
//                           </td>
//                           <td>₹{totalOrderPrice} INR</td>
//                           <td>
//                             <Button
//                               variant="danger"
//                               onClick={() => {
//                                 setSelectedOrder(order);
//                                 setShowModal(true);
//                               }}
//                             >
//                               Cancel Order
//                             </Button>
//                           </td>
//                         </tr>
//                       );
//                     })}
//                   </tbody>
//                 </Table>
//               ) : (
//                 <p>No orders available.</p>
//               )}
//             </Card.Body>
//           </Card>
//         </div>
//       </div>

//       {/* Confirmation Modal for Cancelling Order */}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Cancel Order</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Are you sure you want to request the cancellation of this order? This
//           action will update the order status.
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Close
//           </Button>
//           <Button variant="danger" onClick={handleCancelOrder}>
//             Request Cancellation
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default UserDashboard;



import React, { useState, useEffect } from "react";
import { Card, Table, Spinner, Row, Col } from "react-bootstrap";
import api from "../utils/AxiosInstance";
import Authorized from "../authorized/Authorized";

const UserDashboard = () => {
  Authorized();
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const res = await api.get("/user/getuser");
      setUser(res.data.userDetails);
      setOrders(res.data.userDetails.orders);
    } catch (error) {
      console.error("Error fetching user details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []); // Fetch user data on mount

  // Function to format date as DD-MM-YYYY
  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="container pt-5 pb-5" style={{ minHeight: "80vh" }}>
      {/* Page Header */}
      <Row className="mb-4">
        <Col>
          <h2>User Dashboard</h2>
          <p>Manage your account and order history</p>
        </Col>
      </Row>

      {/* User Details Section */}
      <Row className="mb-4">
        <Col md={6} lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>User Details</Card.Title>
              {loading ? (
                <Spinner animation="border" variant="primary" />
              ) : (
                <>
                  <p>
                    <strong>Name:</strong> {user.username || "N/A"}
                  </p>
                  <p>
                    <strong>Email:</strong> {user.email || "N/A"}
                  </p>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Order History Section */}
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Order History</Card.Title>
              {loading ? (
                <Spinner animation="border" variant="primary" />
              ) : orders.length > 0 ? (
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>

                      <th>#Order Id</th>
                      <th>Order Date</th>
                      <th>Status</th>
                      <th>Order Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order._id}>

                        <td>{order._id}</td>
                        <td>{formatDate(order.orderDate)}</td>
                        <td>{order.status}</td>
                        <td>₹{order.totalAmount} INR</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                <p>No orders available.</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};


export default UserDashboard;
