export default function Contact() {
    return (
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
          <textarea placeholder="Message" className="w-full p-2 border rounded"></textarea>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
            Send
          </button>
        </form>
      </div>
    );
  }
  