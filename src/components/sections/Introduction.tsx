const Introduction = () => {
  return (
    <section id="introduction">
      <header className="topic">Introduction</header>
      <div>
        <p className="paragraph">
          I created this site with the intention of leaving here everything I
          know about troybins.
        </p>
        <p className="paragraph">
          I wrote all of this assuming you know how to handle Riot files and how
          particles work, so you better learn about Riot files first!
        </p>
        <p className="paragraph">
          In this document, I also going to show you how to translate it to the
          current particle format, ".bin".
        </p>
        <h2 className="subtopic">What are troybins?</h2>
        <p className="paragraph">
          Troybins are files where the code of some particle is written,
          identified by the ".troybin" extension; they were responsible for the
          visual effects work in the game and were also an old method used by
          Riot to organize and create VFX {"("}visual effects{")"}.
        </p>
        <p className="paragraph">
          Riot started to stop using troybins around season 7, its substitute
          was the bin files, which have been used ever since.
        </p>
        <h2 className="subtopic">What are bins?</h2>
        <p className="paragraph">
          Bins are compressed JSON files. Contains information about spells,
          skins, champion stats, and visual effects; bins are identified by the
          .bin extension.
        </p>
        <p className="paragraph">
          The only differences between bin and troybin are the properties and
          format. Explaining in a simple way, bins are files that contain a
          bunch of troybins, like a folder, but its properties {"("}what gives
          the particle color, gravity, size, etc.{")"} are constructed in a
          different way.
        </p>
        <h3>Comparison of troybin and bin properties</h3>
        <h4>Troybin size property:</h4>
        <code>p-scale=115 115 0</code>
        <h4>Bin size property:</h4>
        <code>
          birthScale0: <span id="blue">embed</span> <span id="blue">=</span>{" "}
          <span id="blue">ValueVector3</span> <span id="purple">{"{"}</span>
          <br />
          <p className="indent-5">
            constantValue: <span id="blue">vec3</span> ={" "}
            <span id="strong-blue">{"{"}</span>{" "}
            <span id="green">115, 115, 0</span>{" "}
            <span id="strong-blue">{"}"}</span>
          </p>
          <span id="purple">{"}"}</span>
          <br />
          <span id="strong-green">
            //obs: i think it's qml language ¯\_{"("}ツ{")"}_/¯
          </span>
        </code>
        <h3>Comparison of troybin and bin format</h3>
        <h4>Troybin format:</h4>
        <code>
          {"["}2Douterring{"]"} {"<"}-- Start of a particle code (below are its
          properties)
          <br />
          e-framerate=0
          <br />
          e-local-orient=0
          <br />
          e-rate=2
          <br />
          flag-disable-z=1
          <br />
          p-bindtoemitter=1.0 1.0
          <br />
          p-flexoffset=0.004999999888241291
          <br />
          p-life=1
          <br />
          p-linger=0
          <br />
          p-offset=0 15 0<br />
          p-quadrot=1 1 0<br />
          p-quadrotXP1=0 10
          <br />
          p-quadrotXP2=1 -10
          <br />
          p-scale=115 115 0<br />
          p-texture="Ryze_Base_P_shield_2D.dds"
          <br />
          p-uvscroll-no-alpha=1
          <br />
          p-xrgba=1.0 1.0 1.0 1.0
          <br />
          p-xrgba1=0 0 0.352941 0.529412 0<br />
          p-xrgba2=0.5 0.215686 0.556863 1 1<br />
          p-xrgba3=1 0.215686 0.407843 0.713725 0<br />
          pass=21
          <br />
          rendermode=4
          <br />
          //line break
          <br />
          {"["}Another particle{"]"} {"<"}-- Ends after a line break and so the
          next particles start
        </code>
        <h4>Bin format:</h4>
        <code className="text-xs">
          <span className="text-red-600">
            #PROP_text<span className="ml-24">{"<"}-- Start of a bin</span>
            <br />
            type: string = "PROP"
            <br />
            version: u32 = 2<br />
            linked: list[string] = {"{}"}
            <br />
            entries: map[hash,embed] = {"{"}
            <br />
          </span>
          <span className="text-green-800 ml-4">
            "C:/ProgramData/TroybinConverter/troybin/Gangplank/Q/pirate_parley_cas"
            = VfxSystemDefinitionData {"{"}
            <span className="ml-5">{"<"}-- Start of a particle</span>
            <br />
            <span className="ml-10">
              particlePath: string =
              "C:/ProgramData/TroybinConverter/troybin/Gangplank/Q/pirate_parley_cas"
            </span>
            <br />
            <span className="ml-10">
              particleName: string = "pirate_parley_cas"
            </span>
            <br />
            <span className="ml-4">
              {"}"}
              <span className="ml-2">{"<"}-- End of a particle</span>
            </span>
            <br />
            <span className="text-red-600">
              {"}"}
              <span className="ml-2">{"<"}-- End of a bin</span>
            </span>
          </span>
        </code>
      </div>
    </section>
  );
};

export default Introduction;
