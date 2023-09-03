const Properties = () => {
  return (
    <>
      <section id="ExcludeAttachmentType">
        <header className="topic">ExcludeAttachmentType</header>
        <h4>Troybin property:</h4>
        <code>ExcludeAttachmentType="turret nexus inhibitor"</code>
        <h4>Bin property:</h4>
        <code>
          excludedAttachmentTypes: list[string] = {"{"}
          <span className="recoil">
            "turret"
            <br />
            "nexus"
            <br />
            "inhibitor"
            <br />
          </span>
          {"}"}
        </code>
      </section>
      <hr className="divider" />
      <section id="KeywordsExcluded">
        <header className="topic">KeywordsExcluded</header>
        <h4>Troybin property:</h4>
        <code>KeywordsExcluded="LeeSinSkin05"</code>
        <h4>Bin property:</h4>
        <code>
          0xf50b1a41: pointer = 0xf4e37e07 {"{"}
          <span className="recoil">
            keywordsExcluded: list[string] = {"{"}
            <span className="recoil">"LeeSinSkin05"</span>
            {"}"}
          </span>
          {"}"}
        </code>
      </section>
      <hr className="divider" />
      <section id="KeywordsRequired">
        <header className="topic">KeywordsRequired</header>
        <h4>Troybin property:</h4>
        <code>KeywordsRequired="LeeSinSkin05"</code>
        <h4>Bin property:</h4>
        <code>
          0xf50b1a41: pointer = 0xf4e37e07 {"{"}
          <span className="recoil">
            keywordsRequired: list[string] = {"{"}
            <span className="recoil">"LeeSinSkin05"</span>
            {"}"}
          </span>
          {"}"}
        </code>
      </section>
      <hr className="divider" />
      <section id="e-alpharef">
        <header className="topic">e-alpharef</header>
        <h4>Troybin property:</h4>
        <code>e-alpharef=20</code>
        <h4>Bin property:</h4>
        <code>alphaRef: u8 = 20</code>
      </section>
      <hr className="divider" />
      <section id="e-disabled">
        <header className="topic">e-disabled</header>
        <h4>Troybin property:</h4>
        <code>e-disabled=1</code>
        <h4>Bin property:</h4>
        <code>disabled: bool = true</code>
      </section>
      <hr className="divider" />
      <section id="e-framerate">
        <header className="topic">e-framerate</header>
        <h4>Troybin property:</h4>
        <code>e-framerate=1.0</code>
        <h4>Bin property:</h4>
        <code>
          birthFrameRate: embed = ValueFloat {"{"}
          <span className="recoil">constantValue: f32 = 1</span>
          {"}"}
        </code>
      </section>
      <hr className="divider" />
      <section id="e-life">
        <header className="topic">e-life</header>
        <h4>Troybin property:</h4>
        <code>e-life=1.0</code>
        <h4>Bin property:</h4>
        <code>
          lifetime: option{"[f32]"} = {"{"}
          <span className="recoil">1</span>
          {"}"}
        </code>
      </section>
      <hr className="divider" />
      <section id="e-linger">
        <header className="topic">e-linger</header>
        <h4>Troybin property:</h4>
        <code>e-linger=1.0</code>
        <h4>Bin property:</h4>
        <code>
          emitterLinger: option{"[f32]"} = {"{"}
          <span className="recoil">0</span>
          {"}"}
        </code>
      </section>
      <hr className="divider" />
      <section id="e-local-orient">
        <header className="topic">e-local-orient</header>
        <h4>Troybin property:</h4>
        <code>e-local-orient=0</code>
        <h4>Bin property:</h4>
        <code>isLocalOrientation: flag = false</code>
        <i className="obs">
          Obs: The default value for this property is "true", so if the troybin
          property value is 1, you don't need to write it.
        </i>
      </section>
      <hr className="divider" />
      <section id="e-period">
        <header className="topic">e-period</header>
        <h4>Troybin property:</h4>
        <code>e-period=1.0</code>
        <h4>Bin property:</h4>
        <code>
          emitterPeriod: option{"[f32]"} = {"{"}
          <span className="recoil">1</span>
          {"}"}
        </code>
      </section>
      <hr className="divider" />
      <section id="e-rate">
        <header className="topic">e-rate</header>
        <h4>Troybin property:</h4>
        <code>e-rate=1.0</code>
        <h4>Bin property:</h4>
        <code>alphaRef: u8 = 20</code>
      </section>
      <hr className="divider" />
      <section id="e-tilesize">
        <header className="topic">e-tilesize</header>
        <h4>Troybin property:</h4>
        <code>e-tilesize=1000.0 0.0 0.0</code>
        <h4>Bin property:</h4>
        <code>
          primitive: pointer = VfxPrimitiveCameraTrail {"{"}
          <span className="recoil">
            mTrail: embed = VfxTrailDefinitionData {"{"}
            <span className="recoil">
              mMode: u8 = 1<br />
              <strong>
                mBirthTilingSize: embed = ValueVector3 {"{"}
                <span className="recoil">
                  constantValue: vec3 = {"{ 1000, 0, 0 }"}
                </span>
                {"}"}
              </strong>
            </span>
          </span>
          <span className="recoil">{"}"}</span>
          {"}"}
        </code>
      </section>
      <hr className="divider" />
      <section id="e-trail-cutoff">
        <header className="topic">e-trail-cutoff</header>
        <h4>Troybin property:</h4>
        <code>e-tilesize=1000.0 0.0 0.0</code>
        <h4>Bin property:</h4>
        <code>
          primitive: pointer = VfxPrimitiveCameraTrail {"{"}
          <span className="recoil">
            mTrail: embed = VfxTrailDefinitionData {"{"}
            <span className="recoil">
              mMode: u8 = 1<br />
              <strong>
                mBirthTilingSize: embed = ValueVector3 {"{"}
                <span className="recoil">
                  constantValue: vec3 = {"{ 1000, 0, 0 }"}
                </span>
                {"}"}
              </strong>
            </span>
          </span>
          <span className="recoil">{"}"}</span>
          {"}"}
        </code>
      </section>
      <hr className="divider" />
      <section id="e-uvoffset">
        <header className="topic">e-uvoffset</header>
        <h4>Troybin property:</h4>
        <code>e-uvoffset=-2.0 0.0</code>
        <h4>Bin property:</h4>
        <code>
          birthUVOffset: embed = ValueVector2 {"{"}
          <span className="recoil">constantValue: vec2 = {"{ -2, 0 }"}</span>
          {"}"}
        </code>
      </section>
      <hr className="divider" />
      <section id="e-uvoffset-mult">
        <header className="topic">e-uvoffset-mult</header>
        <h4>Troybin property:</h4>
        <code>e-uvoffset-mult=0.0 1.0</code>
        <h4>Bin property:</h4>
        <code>
          birthUVOffsetMult: embed = ValueVector2 {"{"}
          <span className="recoil">constantValue: vec2 = {"{ 0, 1 }"}</span>
          {"}"}
        </code>
      </section>
      <section id="e-uvscroll">
        <header className="topic">e-uvscroll</header>
        <h4>Troybin property:</h4>
        <code>e-uvscroll=-2.0 0.0</code>
        <h4>Bin property:</h4>
        <code>emitterUvScrollRate: vec2 = {"{ -2, 0 }"}</code>
      </section>
      <hr className="divider" />
      <section id="e-uvscroll-mult">
        <header className="topic">e-uvscroll-mult</header>
        <h4>Troybin property:</h4>
        <code>e-uvscroll-mult=0.0 1.0</code>
        <h4>Bin property:</h4>
        <code>emitterUvScrollRateMult: vec2 = {"{ 0, 1 }"}</code>
      </section>
      <hr className="divider" />
      <section id="p-backfaceon">
        <header className="topic">p-backfaceon</header>
        <h4>Troybin property:</h4>
        <code>p-backfaceon=1</code>
        <h4>Bin property:</h4>
        <code>disableBackfaceCull: bool = true</code>
        <i className="obs">
          Obs: The default value for this property is "false", so if the troybin
          property value is 0, you don't need to write it.
        </i>
      </section>
      <hr className="divider" />
      <section id="p-beammode">
        <header className="topic">p-beammode</header>
        <h4>Troybin property:</h4>
        <code></code>
        <h4>Bin property:</h4>
        <code>
          primitive: pointer = VfxPrimitiveBeam {"{"}
          <span className="recoil">
            mBeam: embed = VfxBeamDefinitionData {"{"}
            <span className="recoil">
              <strong>mMode: u8 = 1</strong>
            </span>
          </span>
          <span className="recoil">{"}"}</span>
          {"}"}
        </code>
      </section>
      <hr className="divider" />
      <section id="p-bindtoemitter">
        <header className="topic">p-bindtoemitter</header>
        <h4>Troybin property:</h4>
        <code>p-bindtoemitter=1.0 1.0</code>
        <h4>Bin property:</h4>
        <code>
          //complexEmitterDefinitionData property
          <br />
          bindWeight: embed = ValueFloat {"{"}
          <span className="recoil">constantValue: f32 = 1</span>
          {"}"}
          <br />
          //simpleEmitterDefinitionData property
          <br />
          particleBind: vec2 = {"{ 1, 1 }"}
        </code>
      </section>
      <hr className="divider" />
      <section id="p-coloroffset">
        <header className="topic">p-coloroffset</header>
        <h4>Troybin property:</h4>
        <code>p-coloroffset=0.0 0.2</code>
        <h4>Bin property:</h4>
        <code>colorLookUpOffsets: vec2 = {"{ 0, 0.200000003 }"}</code>
      </section>
      <hr className="divider" />
      <section id="p-colorscale">
        <header className="topic">p-colorscale</header>
        <h4>Troybin property:</h4>
        <code>p-colorscale=0.7 1.0</code>
        <h4>Bin property:</h4>
        <code>colorLookUpScales: vec2 = {"{ 0.7, 1 }"}</code>
      </section>
      <hr className="divider" />
      <section id="p-colortype">
        <header className="topic">p-colortype</header>
        <h4>Troybin property:</h4>
        <code>p-colortype=0.0 1.0</code>
        <h4>Bin property:</h4>
        <code>
          //In p-colortype the first value is X and the second one is Y.
          <br />
          colorLookUpTypeX: u8 = 0<br />
          colorLookUpTypeY: u8 = 1
        </code>
      </section>
      <hr className="divider" />
      <section id="p-distortion-mode">
        <header className="topic">p-distortion-mode</header>
        <h4>Troybin property:</h4>
        <code>p-distortion-mode=2</code>
        <h4>Bin property:</h4>
        <code>
          distortionDefinition: pointer = VfxDistortionDefinitionData {"{"}
          <span className="recoil">
            distortion: f32 = 0.035
            <br />
            <strong>distortionMode: u8 = 2</strong>
            <br />
            normalMapTexture: string = "path/texture.dds"
          </span>
          {"}"}
        </code>
      </section>
      <hr className="divider" />
      <section id="p-distortion-power">
        <header className="topic">p-distortion-power</header>
        <h4>Troybin property:</h4>
        <code>p-distortion-power=0.035</code>
        <h4>Bin property:</h4>
        <code>
          distortionDefinition: pointer = VfxDistortionDefinitionData {"{"}
          <span className="recoil">
            <strong>distortion: f32 = 0.035</strong>
            <br />
            distortionMode: u8 = 2<br />
            normalMapTexture: string = "path/texture.dds"
          </span>
          {"}"}
        </code>
      </section>
      <hr className="divider" />
      <section id="p-frameRate">
        <header className="topic">p-frameRate</header>
        <h4>Troybin property:</h4>
        <code>p-frameRate=16</code>
        <h4>Bin property:</h4>
        <code>frameRate: f32 = 16</code>
      </section>
      <hr className="divider" />
      <section id="p-life">
        <header className="topic">p-life</header>
        <h4>Troybin property:</h4>
        <code>p-life=3.0</code>
        <h4>Bin property:</h4>
        <code>
          particleLifetime: embed = ValueFloat {"{"}
          <span className="recoil">constantValue: f32 = 3</span>
          {"}"}
        </code>
      </section>
      <hr className="divider" />
      <section id="p-linger">
        <header className="topic">p-linger</header>
        <h4>Troybin property:</h4>
        <code>p-linger=1.0</code>
        <h4>Bin property:</h4>
        <code>
          particleLinger: option{"[f32]"} = {"{"}
          <span className="recoil">1</span>
          {"}"}
        </code>
      </section>
      <hr className="divider" />
      <section id="p-local-orient">
        <header className="topic">p-local-orient</header>
        <h4>Troybin property:</h4>
        <code>p-local-orient=1</code>
        <h4>Bin property:</h4>
        <code>particleIsLocalOrientation: flag = true</code>
        <i className="obs">
          Obs: The default value for this property is "false", so if the troybin
          property value is 0, you don't need to write it.
        </i>
      </section>
      <hr className="divider" />
      <section id="p-mesh">
        <header className="topic">p-mesh</header>
        <h4>Troybin property:</h4>
        <code>p-mesh=mesh.SCB</code>
        <h4>Bin property:</h4>
        <code>
          primitive: pointer = VfxPrimitiveMesh {"{"}
          <span className="recoil">
            mMesh: embed = VfxMeshDefinitionData {"{"}
            <span className="recoil">
              <strong>mSimpleMeshName: string = "path/mesh.SCB"</strong>
            </span>
            {"}"}
          </span>
          {"}"}
        </code>
      </section>
      <hr className="divider" />
      <section id="p-meshtex">
        <header className="topic">p-meshtex</header>
        <h4>Troybin property:</h4>
        <code>p-meshtex=texture.dds</code>
        <h4>Bin property:</h4>
        <code>texture: string = "path/texture.dds"</code>
      </section>
      <hr className="divider" />
      <section id="p-numframes">
        <header className="topic">p-numframes</header>
        <h4>Troybin property:</h4>
        <code>p-numframes=4</code>
        <h4>Bin property:</h4>
        <code>numFrames: u16 = 4</code>
      </section>
      <hr className="divider" />
      <section id="p-offset">
        <header className="topic">p-offset</header>
        <h4>Troybin property:</h4>
        <code>p-offset=0.0 10.0 0.0</code>
        <h4>Bin property:</h4>
        <code>
          shape: embed = VfxShape {"{"}
          <span className="recoil">
            emitOffset: embed = ValueVector3 {"{"}
            <span className="recoil">
              constantValue: vec3 = {"{ 0, 10, 0 }"}
            </span>
            {"}"}
          </span>
          {"}"}
        </code>
      </section>
      <hr className="divider" />
      <section id="p-postoffset">
        <header className="topic">p-postoffset</header>
        <h4>Troybin property:</h4>
        <code>p-postoffset=0.0 10.0 0.0</code>
        <h4>Bin property:</h4>
        <code>
          shape: embed = VfxShape {"{"}
          <span className="recoil">
            birthTranslation: embed = ValueVector3 {"{"}
            <span className="recoil">
              constantValue: vec3 = {"{ 0, 10, 0 }"}
            </span>
            {"}"}
          </span>
          {"}"}
        </code>
      </section>
      <hr className="divider" />
      <section id="p-projection-fading">
        <header className="topic">p-projection-fading</header>
        <h4>Troybin property:</h4>
        <code>p-projection-fading=100</code>
        <h4>Bin property:</h4>
        <code>
          primitive: pointer = VfxPrimitivePlanarProjection {"{"}
          <span className="recoil">
            mProjection: embed = VfxProjectionDefinitionData {"{"}
            <span className="recoil">
              mYRange: f32 = 50
              <br />
              <strong>mFading: f32 = 100</strong>
            </span>
            {"}"}
          </span>
          {"}"}
        </code>
      </section>
      <hr className="divider" />
      <section id="p-projection-y-range">
        <header className="topic">p-projection-y-range</header>
        <h4>Troybin property:</h4>
        <code>p-projection-y-range=50</code>
        <h4>Bin property:</h4>
        <code>
          primitive: pointer = VfxPrimitivePlanarProjection {"{"}
          <span className="recoil">
            mProjection: embed = VfxProjectionDefinitionData {"{"}
            <span className="recoil">
              <strong>mYRange: f32 = 50</strong>
              <br />
              mFading: f32 = 100
            </span>
            {"}"}
          </span>
          {"}"}
        </code>
      </section>
      <hr className="divider" />
      <section id="p-randomstartframe">
        <header className="topic">p-randomstartframe</header>
        <h4>Troybin property:</h4>
        <code>p-randomstartframe=1</code>
        <h4>Bin property:</h4>
        <code>isRandomStartFrame: flag = true</code>
        <i className="obs">
          Obs: The default value for this property is "false", so if the troybin
          property value is 0, you don't need to write it.
        </i>
      </section>
      <hr className="divider" />
      <section id="p-scalebias">
        <header className="topic">p-scalebias</header>
        <h4>Troybin property:</h4>
        <code>p-scalebias=1.0 1.0</code>
        <h4>Bin property:</h4>
        <code>scaleBias: vec2 = {"{ 1, 1 }"}</code>
      </section>
      <hr className="divider" />
      <section id="p-shadow">
        <header className="topic">p-shadow</header>
        <h4>Troybin property:</h4>
        <code>p-shadow=1</code>
        <h4>Bin property:</h4>
        <code>doesCastShadow: flag = true</code>
        <i className="obs">
          Obs: The default value for this property is "false", so if the troybin
          property value is 0, you don't need to write it.
        </i>
      </section>
      <hr className="divider" />
      <section id="p-simpleorient">
        <header className="topic">p-simpleorient</header>
        <h4>Troybin property:</h4>
        <code>p-simpleorient=1</code>
        <h4>Bin property:</h4>
        <code>
          //Only works in simpleEmitterDefinitionData
          <br />
          0xbc022424: pointer = 0x7f70a2b2 {"{"}
          <span className="recoil">orientation: u8 = 1</span>
          {"}"}
        </code>
      </section>
      <hr className="divider" />
      <section id="p-startframe">
        <header className="topic">p-startframe</header>
        <h4>Troybin property:</h4>
        <code>p-startframe=4</code>
        <h4>Bin property:</h4>
        <code>startFrame: u16 = 4</code>
      </section>
      <hr className="divider" />
      <section id="p-texture">
        <header className="topic">p-texture</header>
        <h4>Troybin property:</h4>
        <code>p-texture=texture.dds</code>
        <h4>Bin property:</h4>
        <code>texture: string = "path/texture.dds"</code>
      </section>
      <hr className="divider" />
      <section id="p-texture-mult">
        <header className="topic">p-texture-mult</header>
        <h4>Troybin property:</h4>
        <code>p-texture-mult=texture.dds</code>
        <h4>Bin property:</h4>
        <code>
          textureMult: pointer = 0xb097c1bd {"{"}
          <span className="recoil">
            <strong>textureMult: string = "path/texture.dds"</strong>
          </span>
          {"}"}
        </code>
      </section>
      <hr className="divider" />
      <section id="p-uvmode">
        <header className="topic">p-uvmode</header>
        <h4>Troybin property:</h4>
        <code>p-uvmode=2</code>
        <h4>Bin property:</h4>
        <code>uvMode: u8 = 2</code>
      </section>
      <hr className="divider" />
      <section id="p-worldaccel">
        <header className="topic">p-worldaccel</header>
        <h4>Troybin property:</h4>
        <code>p-worldaccel=0.0 -800.0 0.0</code>
        <h4>Bin property:</h4>
        <code>
          worldAcceleration: embed = IntegratedValueVector3 {"{"}
          constantValue: vec3 = {"{ 0, -10, 0 }"}
          dynamics: pointer = VfxAnimatedVector3fVariableData {"{"}
          times: list[f32] = {"{"}0{"}"}
          values: list[vec3] = {"{"}
          {"{ 0, -10, 0 }"}
          {"}"}
          {"}"}
          {"}"}
        </code>
      </section>
      <hr className="divider" />
      <section id="pass">
        <header className="topic">pass</header>
        <h4>Troybin property:</h4>
        <code>pass=60</code>
        <h4>Bin property:</h4>
        <code>pass: i16 = 60</code>
      </section>
      <hr className="divider" />
      <section id="rendermode">
        <header className="topic">rendermode</header>
        <h4>Troybin property:</h4>
        <code>rendermode=3</code>
        <h4>Bin property:</h4>
        <code>blendMode: u8 = 3</code>
      </section>
      <hr className="divider" />
      <section id="single-particle">
        <header className="topic">single-particle</header>
        <h4>Troybin property:</h4>
        <code>single-particle=1</code>
        <h4>Bin property:</h4>
        <code>isSingleParticle: flag = true</code>
        <i className="obs">
          Obs: The default value for this property is "false", so if the troybin
          property value is 0, you don't need to write it.
        </i>
      </section>
      <hr className="divider" />
      <section id="uniformscale">
        <header className="topic">uniformscale</header>
        <h4>Troybin property:</h4>
        <code>uniformscale=1</code>
        <h4>Bin property:</h4>
        <code>isUniformScale: flag = true</code>
        <i className="obs">
          Obs: The default value for this property is "false", so if the troybin
          property value is 0, you don't need to write it.
        </i>
      </section>
    </>
  );
};

export default Properties;
