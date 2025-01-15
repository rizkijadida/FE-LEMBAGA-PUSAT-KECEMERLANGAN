"use client";
import useGetAdministrators from "@/hooks/administrator/useGetadministrators";
import { appConfig } from "@/utils/config";
import AdministratorCard from "./components/AdministratorCard";

const Administrator = () => {
  const { data: administrators, isLoading } = useGetAdministrators();

  if (isLoading) {
    return <div className="mx-auto justify-center flex">Loading...</div>;
  }
  return (
    <main className="container mx-auto px-4 py-5 gap-3">
      <section className="flex mx-auto justify-center space-y-5 mb-10">
        <h1 className="text-bold text-xl text-orange-300 w-[500px] text-center">
          PENGURUS PERKUMPULAN LEMBAGA PUSAT KECEMERLANGAN PEMBANGUNAN
          MASYARAKAT
        </h1>
      </section>
      <section className="grid grid-cols-2 gap-8 items-center w-[1000px] justify-center mx-auto">
        {administrators.map((adm, index) => {
          const imageUrl =
            appConfig.baseUrl +
            `/assets${adm.profilePic.replace("/images", "")}`;

          console.log(imageUrl);

          return (
            <div
              key={index}
              className={
                index === administrators.length - 1
                  ? "col-span-2 justify-self-center w-[450px]"
                  : ""
              }
            >
              <AdministratorCard
                title={adm.name}
                author={adm.jobTitle}
                category={adm.idCardNumberOrPassport}
                createdAt={new Date(adm.createdAt)}
                description={adm.supervisoryOrgan}
                imageUrl={imageUrl}
                blogId={adm.id}
              />
            </div>
            // <AdministratorCard
            //   key={index}
            //   title={adm.name}
            //   author={adm.jobTitle}
            //   category={adm.idCardNumberOrPassport}
            //   createdAt={new Date(adm.createdAt)}
            //   description={adm.supervisoryOrgan}
            //   imageUrl={imageUrl}
            //   blogId={adm.id}
            // />
          );
        })}
      </section>
    </main>
  );
};

export default Administrator;
