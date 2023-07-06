import { UseCourse } from "../hooks";
import { Cost } from "./CoursePages/Cost";
import { Admission } from "./CoursePages/Admission";

export const CourseItemPage = () => {
  const {sections, data, handleClickAdmision, handleClickClosed, handleClickCostos} = UseCourse()

  if (data) {
    return (
      <div className="p-6">
        <div className="flex h-[410px]">
          <div className="w-[65%] h-full">
            {sections.section1 && (
                <Cost handleClickClosed={handleClickClosed}/>
            )}
            {sections.section0 && (
                <Admission handleClickClosed={handleClickClosed} />
            )}
            {!sections.section0 && !sections.section1 && (
              <div>
                <div className="w-full h-[200px]">
                  <img className="w-full h-full" src={data.img} alt={data.id} />
                </div>
                <div className="w-full pt-3 h-[210px]">
                  <div className="w-full h-full">
                    <div className="pb-2 font-bold">
                      <p>{data.title}</p>
                    </div>
                    <div>
                      <p>{data.descripcion}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="w-[245px] pl-2 h-full">
            <div className="bg-white mb-2 flex text-[10px] rounded-md flex-col w-full">
              <div className="pl-2 flex items-center w-full h-[40px]">
                <span className="pi pi-user pr-1"></span>
                <p className="pr-1">Estudiantes:</p>
                {/*Próximamente */}
                <p className="font-bold">{data.students} </p>
              </div>
              <div className="pl-2 flex items-center w-full h-[40px]">
                <span className="pi pi-language pr-1"></span>
                <p className="pr-1">Idiomas:</p>
                <p className="font-bold">
                  {data.language.map((e) => e).join(", ")}
                </p>
              </div>
              <div className="pl-2 flex items-center w-full h-[40px]">
                <span className="pi pi-clock pr-1"></span>
                <p className="pr-1">Duración:</p>
                <p className="font-bold">{data.duration}</p>
              </div>
              <div className="pl-2 flex items-center w-full h-[40px]">
                <span className="pi pi-book pr-1"></span>
                <p className="pr-1">Categoria:</p>
                <p className="font-bold">{data.category}</p>
              </div>
              <div className="pl-2 flex items-center w-full h-[40px]">
                <span className="pi pi-credit-card pr-1"></span>
                <p className="pr-1">Creditos:</p>
                <p className="font-bold">{data.credits}</p>
              </div>
              <div className="pl-2 flex items-center w-full h-[40px]">
                <span className="pi pi-verified pr-1"></span>
                <p className="pr-1">Certificación:</p>
                <p className="font-bold">
                  {data.certificate ? "Después de finalizar" : "No disponible"}
                </p>
              </div>
            </div>
            <div className="w-full h-[100px] rounded-md flex justify-around items-center bg-white">
              <div className=" flex items-center flex-col">
                <a href={data.pemsul} target="_blank" download>
                  <button className="bg-blue-500 w-[50px] hover:bg-blue-600 text-white py-2 px-4 rounded flex flex-col items-center">
                    <i className="pi pi-file-pdf"></i>
                  </button>
                </a>
                <span className="mt-1 text-[10px]">Pensum</span>
              </div>
              <div className=" flex flex-col items-center">
                <button
                  type="button"
                  disabled
                  className="bg-blue-500 cursor-not-allowed opacity-50 w-[50px] text-xs hover:bg-blue-600 text-white py-2 px-4 rounded flex flex-col items-center"
                >
                  <i className="pi pi-arrow-right"></i>
                </button>
                <span className="mt-1 text-[10px]">Inscribirse</span>
              </div>
              <div className=" flex flex-col items-center">
                <button
                  onClick={handleClickCostos}
                  type="button"
                  className="bg-blue-500 w-[50px] text-xs hover:bg-blue-600 text-white py-2 px-4 rounded flex flex-col items-center"
                >
                  <i className="pi pi-dollar"></i>
                </button>
                <span className="mt-1 text-[10px]">Costos</span>
              </div>
              <div className=" flex flex-col items-center">
                <button
                  type="button"
                  onClick={handleClickAdmision}
                  className="bg-blue-500 w-[50px] text-xs hover:bg-blue-600 text-white py-2 px-4 rounded flex flex-col items-center"
                >
                  <i className="pi pi-user-plus"></i>
                </button>
                <span className="mt-1 text-[10px]">Admisión</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="p-6 w-full h-[467px] flex justify-center items-center">
        <p>No se encontró nada para mostrar</p>
      </div>
    );
  }
};
