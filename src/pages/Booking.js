import { redirect } from "react-router-dom";
import Card from "../UI/Cart";
import BookingHeader from "../components/Booking/BookingHeader/BookingHeader";
import BookingForm from "../components/Booking/BookingForm/BookingForm";

const BookingPage = () => {
  return (
    <Card>
      <BookingHeader />
      <BookingForm />
    </Card>
  );
};

export default BookingPage;

export const actionBooking = async ({ request, params }) => {
  const method = request.method;
  const param = params.detailId;
  const inputValue = await request.formData();

  const userLocal = JSON.parse(localStorage.getItem("user"));
  if (!userLocal) {
    return redirect("/login");
  }
  const [user] = userLocal.user;

  //---lấy value các input---
  const [dateStart, dateEnd] = inputValue.get("date").split(" to ");
  const fullName = inputValue.get("fullName");
  const email = inputValue.get("email");
  const phoneNumber = inputValue.get("phoneNumber");
  const identityCardNumber = inputValue.get("cardNumber");
  const room = JSON.parse(inputValue.get("checkbox"));
  const payment = inputValue.get("payment");
  const price = inputValue.get("total");

  const body = {
    fullName,
    email,
    phoneNumber,
    identityCardNumber,
    hotelId: param,
    room,
    dateStart,
    dateEnd,
    price,
    payment,
    status: "Booked",
  };

  const response = await fetch(
    process.env.REACT_APP_API_URL + `/detail/${param}/booking`,
    {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user._id,
      },
      body: JSON.stringify(body),
    }
  );

  if (!response.ok) {
    console.log("post booking error");
    return null;
  }

  return redirect("/transactions");
};
