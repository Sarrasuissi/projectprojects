"use client";
import React, { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    typeProject: "",
    adresse: "",
    description: "",
    budget: "",
    date: "",
  });
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setConfirmationMessage(
      `Merci pour votre message, ${formData.nom} ${formData.prenom}. Nous reviendrons vers vous bientôt.`
    );
    setFormData({
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      typeProject: "",
      adresse: "",
      description: "",
      budget: "",
      date: "",
    });
  };

  return (
    <div className="">
      <div
        className="mb-20 py-80"
        style={{
          backgroundImage: `url('/assets/home/maps.webp')`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="shadow-2xl w-defaultwidth m-auto max-w-[1200px] p-14 mt-[-500px] mb-20 bg-white ">
        <form onSubmit={handleSubmit} className="flex flex-wrap p-10">
          <div className="basis-full md:basis-1/2 md:pe-10 text-[#6D6D6D]">
            <div className="flex pb-5 space-x-0">
              <div className="flex-1">
                <label>Nom</label>
                <input
                  name="nom"
                  placeholder="Nom"
                  type="text"
                  required
                  className="my-2 block w-full shadow p-2"
                  value={formData.nom}
                  onChange={handleChange}
                />
              </div>
              <div className="flex-1">
                <label>Prénom</label>
                <input
                  name="prenom"
                  placeholder="Prénom"
                  type="text"
                  required
                  className="my-2 block w-full shadow p-2"
                  value={formData.prenom}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex pb-5 space-x-0">
              <div className="flex-1">
                <label>
                  Email
                  <input
                    placeholder="JonDoe@gmail.com"
                    name="email"
                    type="email"
                    required
                    className="my-2 w-full shadow p-2"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="flex-1">
                <label>
                  Téléphone
                  <input
                    placeholder="+33"
                    name="telephone"
                    type="phone"
                    required
                    className="my-2 w-full shadow p-2"
                    value={formData.telephone}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>

            <div className="pb-5">
              <label>
                Objet
                <input
                  name="adresse"
                  type="text"
                  required
                  className="my-2 w-full shadow p-2"
                  value={formData.adresse}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="pb-5">
              <label>
                Message
                <textarea
                  placeholder="Text"
                  name="description"
                  required
                  className="my-2 w-full shadow p-10"
                  value={formData.description}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="basis-full flex justify-end mt-5">
              <button
                type="submit"
                className="my-2 border p-4 px-8 text-center bg-purple text-white"
              >
                contactez-nous
              </button>
            </div>
          </div>
          <div className="basis-full md:basis-1/2 pl-10">
            <p className="pb-20 pt-10 text-[#262626]">
              Prêt à donner un nouvel élan à votre entreprise ? Contactez Finky,
              votre entreprise de conseil en gestion et RH en Tunisie, dès
              aujourd&lsquo;hui pour discuter de vos besoins en gestion et
              ressources humaines.
            </p>

            <p className="pb-6 text-xl text-[#000000]">Contactez-nous</p>
            <hr className="w-32 h-1 mx-0 mb-10 bg-purple border-0 rounded" />
            <div className="pb-7">
              <div className="flex">
                <img
                  src="/assets/icons/adresse.webp"
                  alt="adresse"
                  className="h-6"
                />
                <p className="max-w-[250px] text-[#262626] pl-4">
                  15 rue des halles 75001 paris, france
                </p>
              </div>
            </div>

            <div className="pb-7">
              <div className="flex">
                <img src="/assets/icons/mail.webp" alt="mail" className="h-6" />
                <p className="max-w-[250px] text-[#262626] pl-2">
                  contact@eneatec.com
                </p>
              </div>
            </div>
            <div className="pb-7">
              <div className="flex">
                <img
                  src="/assets/icons/phone.webp"
                  alt="phone"
                  className="h-6"
                />
                <p className="max-w-[250px] pl-4 text-[#262626]">
                  +33 1 83 64 20 25
                </p>
              </div>
            </div>
          </div>
        </form>
        {confirmationMessage && (
          <div className="mt-4 text-center font-semibold text-purple">
            {confirmationMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
