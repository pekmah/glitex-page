import React from "react";
import Layout from "../../layout";
import { AiBuild, AiExperience, AiMain, AiStrategy } from "../../components/ai";

export default function Ai() {
  return (
    <Layout>
      <AiMain />

      <AiStrategy />

      {/* let's build ai */}
      <AiBuild />

      {/* experince */}
      <AiExperience />
    </Layout>
  );
}
