"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Schéma de validation avec Zod
const donationSchema = z.object({
  amount: z.number().min(5, { message: "Le montant doit être au moins de 5€" }),
  frequency: z.enum(["one-time", "monthly"]),
});

type DonationFormInputs = z.infer<typeof donationSchema>;

const Dont = () => {
  const [selectedFrequency, setSelectedFrequency] = useState<
    "one-time" | "monthly">("one-time");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(20);

  const form = useForm<DonationFormInputs>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      amount: 20,
      frequency: "one-time",
    },
  });

  const { handleSubmit, control, setValue, watch } = form;
  const customAmount = Number(watch("amount"));

  const onSubmit = (data: DonationFormInputs) => {
    console.log("Form submitted:", data);
    // ici tu peux appeler ton API ou rediriger
  };

  const [selectedPayment, setSelectedPayment] = useState<
    "visa" | "mastercard" | "paypal" | null
  >(null);

  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Chaque geste compte
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Votre générosité permet de transformer la vie des enfants. Ensemble,
            offrons-leur un avenir plus serein et rempli de sourires.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Formulaire */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6">Faire un don</h2>
            <Form {...form}>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Fréquence */}
                <div className="relative inline-flex bg-gray-100 w-full rounded-lg p-1">
                  {/* Highlight qui se déplace */}
                  <div
                    className={cn(
                      "absolute top-1 left-1 w-1/2 h-[calc(100%-0.25rem)] bg-primary rounded-full transition-all",
                      selectedFrequency === "monthly" && "left-1/2",
                    )}
                  ></div>

                  {/* Options */}
                  <button
                    type="button"
                    className={cn(
                      "relative z-10 flex-1 py-2 text-sm font-semibold rounded-full transition-colors text-center",
                      selectedFrequency === "one-time"
                        ? "text-white"
                        : "text-gray-500",
                    )}
                    onClick={() => {
                      setSelectedFrequency("one-time");
                      setValue("frequency", "one-time");
                    }}
                  >
                    Une seule fois
                  </button>

                  <button
                    type="button"
                    className={cn(
                      "relative z-10 flex-1 py-2 text-sm font-semibold rounded-full transition-colors text-center",
                      selectedFrequency === "monthly"
                        ? "text-white"
                        : "text-gray-500",
                    )}
                    onClick={() => {
                      setSelectedFrequency("monthly");
                      setValue("frequency", "monthly");
                    }}
                  >
                    Tous les mois
                  </button>
                </div>

                {/* Montants prédéfinis */}
                <div className="grid grid-cols-3 gap-3">
                  {[20, 50, 100].map((amount) => (
                    <Button
                      key={amount}
                      type="button"
                      className={`border-2 py-3 rounded-lg font-bold transition-all ${
                        selectedAmount === amount && customAmount !== amount
                          ? "border-primary bg-primary text-white"
                          : "border-gray-200 hover:border-primary bg-gray-50 text-gray-700 hover:bg-primary hover:text-white"
                      }`}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setValue("amount", amount);
                      }}
                    >
                      {amount}€
                    </Button>
                  ))}
                </div>

                {/* Montant libre */}
                <FormField
                  control={control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          placeholder="Montant libre"
                          className="w-full pl-4 pr-12 py-3 border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                          onChange={(e) => {
                            const val = Number(e.target.value);
                            field.onChange(val);
                            setSelectedAmount(null); // deselect preset
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-500">
                        €
                      </div>
                    </FormItem>
                  )}
                />

                {/* Paiement */}
                <div className="pt-4">
                  <p className="text-xs text-black uppercase font-semibold mb-3 tracking-wider">
                    Modes de paiement sécurisés
                  </p>
                  <div className="flex gap-6 items-center h-12">
                    {[
                      {
                        id: "visa",
                        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkXdNLTDBpFjdmEsQ5Xo7MuFmRtnO9MMJTnV8xPsR0IGU8oebMMxl1a2FspfaqZueqeI-9bjJxZ9PhTB1MUBezMPoneLLlTM3DGy5FdcbL3VqmOz11gGcz6He0WKVKBu_3JvCD4riU8TbQaEhPkQHne8ytxehvmLzcnXsKD89eZm7juJZxgR55ljiXqhumJaVc8RQMKTWmXdtp0XS4xfBCgOdvMhYp7t3axp6b4JhSWH_meQTZG7VouAHZiQDweqVf5Up8337_1Pk",
                        alt: "Visa",
                      },
                      {
                        id: "mastercard",
                        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0oRsZ2gjJI18olOg_ZwvqtPne75tNMVJZv61kgj99AJP9l-jjcTh8rL-6Ee4VhCp0cn1oyN3oZdZPybUHNQ8Jj6wYIqaGksrYryeaCP2DXGF2ppIePCn0kxp4f7FZClKohTM2019ouNCACm5Kzz4X8bJadEJif5D2d6eJ9tHT2d5MiAeH4oiw1FVJf4H1pG2_YU32Ibx14vbZg2WFgEwzdnoqxNvwVrW4DoxL18P-lSDZZF6gUq64z1xz0u4CAPctkRR-_zGm0AI",
                        alt: "Mastercard",
                      },
                      {
                        id: "paypal",
                        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7KjNE6GwXDGzlrbgOSBBGWDlrCk02EYn4uD_kOHvndFPyj_1JtuCMb9fWo-mbh-YWwiPrWm_GaQ459PR_Mg6NLj-wmZZAlvgDBobbTB5__9pTn-PCRWTR5CSgRXvDkBpaC_Zg6ht98T6NjDy5k2quZZtwrhGoOnHpwKAreLI9IhKmy3V-f5TtL8sh-nt7b8E2P2uGQxr3RyY1ozc09Crc1RLWsFEtXq5SJaFojZ9-icX42g7XfpY5ihm00jcYZkCSLXVtL2orgkE",
                        alt: "PayPal",
                      },
                    ].map((card) => (
                      <div
                        key={card.id}
                        onClick={() => setSelectedPayment(card.id as "visa" | "mastercard" | "paypal" | null)}
                        className={`relative cursor-pointer border-2 rounded-lg p-1 transition-all ${
                          selectedPayment === card.id
                            ? "border-primary"
                            : "border-gray-200"
                        }`}
                      >
                        <Image width={40} height={40} alt={card.alt} className="h-10" src={card.src} />
                        {selectedPayment === card.id && (
                          <span className="absolute top-0 right-0 w-4 h-4 bg-primary rounded-full border-2 border-white" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-primary-dark shadow-lg transition-all uppercase tracking-wide cursor-pointer"
                >
                  Valider mon don
                </Button>

                <p className="text-center text-xs text-gray-500 italic">
                  Vos informations sont cryptées et sécurisées. Un reçu fiscal
                  vous sera envoyé.
                </p>
              </form>
            </Form>
          </section>

          {/* Impact */}
          <section className="space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">L&apos;impact de vos dons</h2>
              <div className="space-y-6">
                {[20, 50, 100].map((amount) => (
                  <div
                    key={amount}
                    className="flex items-start gap-4 p-4 border-l-4 border-primary bg-orange-50 rounded-l-lg rounded-r-lg"
                  >
                    <div className="text-2xl font-bold text-primary">
                      {amount}€
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {amount === 20 && (
                        <>
                          Offre{" "}
                          <span className="font-bold">1 mois de repas</span>{" "}
                          complets et nutritifs pour un enfant de l&apos;orphelinat.
                        </>
                      )}
                      {amount === 50 && (
                        <>
                          Couvre les{" "}
                          <span className="font-bold">frais de scolarité</span>{" "}
                          et le matériel pédagogique pour un semestre.
                        </>
                      )}
                      {amount === 100 && (
                        <>
                          Financement du{" "}
                          <span className="font-bold">
                            suivi médical complet
                          </span>{" "}
                          pour 5 enfants pendant un an.
                        </>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-custom border border-gray-100 text-center">
                <svg
                  className="w-8 h-8 text-green-500 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
                <span className="text-xs font-semibold text-gray-600">
                  Paiement 100% Sécurisé
                </span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-custom border border-gray-100 text-center">
                <svg
                  className="w-8 h-8 text-blue-500 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
                <span className="text-xs font-semibold text-gray-600">
                  Transparence Totale
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Dont;
