import { Toaster, toast } from "sonner";
import { BiCheck } from "react-icons/bi";

function App() {
  async function uploadSomething() {
    const res = await fetch("https://reqres.in/api/users/1");
    return await res.json();

    // return new Promise((resolve) => setTimeout(resolve, 3000));
  }
  return (
    <div>
      <h1>Hello wolrd</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo hic
        pariatur error magni necessitatibus suscipit vel maxime similique
        doloribus accusantium aut qui corrupti, possimus enim quidem commodi
        nostrum excepturi blanditiis.
      </p>
      <Toaster theme="dark" />
      <button
        onClick={() =>
          // toast("Terminos Aceptados", {
          //   description: "My description",
          //   icon: <BiCheck style={{ color: "green", fontSize: "1rem" }} />,
          // })

          // {
          //   toast.success("My success toast");
          // }

          // {
          //   toast.error("My error toast");
          // }

          // {
          //   toast("My action toast", {
          //     action: {
          //       label: "Action",
          //       onClick: () => console.log("Action!"),
          //     },
          //   });
          // }

          {
            toast.promise(uploadSomething, {
              loading: "Subiendo archivo...",
              // success: "Archivo cargado correctamente",
              success: ({ data }) => {
                console.log(data);
                return `Bienvenido ${data.first_name} ${data.last_name}`;
              },
              error: "Ocurrio un error al cargar el archivo",
            });
          }
        }
      >
        Aceptar
      </button>
    </div>
  );
}
3;
export default App;
