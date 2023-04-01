import Link from "next/link";
import { API_BASE_URL } from "@/utils";
const getBooksList = async () => {
  const res = await fetch(`${API_BASE_URL}/books`);
  if (!res.ok) {
    throw new Error("Something went Wrong");
  }
  return res.json();
};

export default async function MainPage() {
const book = await getBooksList();
console.log(book)
    return (
        <div className="container grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
      {book?.map((item: any) => (
        <Link href={`/bookDetail/${item.id}`} key={item.id}>
          <div className="item">
            <img src="/books.jpg" alt="books" />
            <div>
              <h2>{item.name}</h2>
              <p>Type: {item.type}</p>
              <p className="font-bold">
                available: {item.available ? "true" : "false"}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
      );
    
}