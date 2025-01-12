import React from "react";
import Layout from "../../layout";
import {
  AiBuild,
  AiExperience,
  AiMain,
  AiStrategy,
  AiWhyChoose,
} from "../../components/ai";

export default function Ai() {
  return (
    <Layout>
      <AiMain />

      <AiStrategy />

      {/* let's build ai */}
      <AiBuild />

      {/* why choose ud */}
      <AiWhyChoose />

      {/* experince */}
      <AiExperience />
    </Layout>
  );
}
