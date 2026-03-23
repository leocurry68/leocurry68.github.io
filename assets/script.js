(() => {
  const $ = (sel) => document.querySelector(sel);
  const elText = (id, value) => {
    const node = document.getElementById(id);
    if (node) node.textContent = value;
  };

  const picks = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const now = () => new Date();

  const randomSubtitle = () =>
    picks([
      "Xuanwu Skull Base Anatomy / 宣武医院鼻颅底解剖",
      "Head & Neck Cancer Precision Oncology / 头颈癌精准肿瘤学",
      "Multi-omics + Single-cell + Spatial Transcriptomics / 多组学整合",
      "Bioinformatics Engineer for Translational Oncology / 生物信息工程师",
      "Patient-Derived Organoid Platform / 患者来源类器官平台",
    ]);

  const terminalLines = () => {
    const ts = now().toISOString().replace("T", " ").replace("Z", "Z");
    const checksum = randomChecksum();
    const subtitle = randomSubtitle();

    const cmds = [
      `[${ts}] Profile booting...`,
      `Track: Clinical + Translational Oncology`,
      `Theme: ${subtitle}`,
      "",
      "- Xuanwu ENT residency with skull base anatomy context",
      "- Head & Neck squamous carcinoma (HNSCC) focus",
      "- Multi-omics and single-cell analytical pipelines",
      "- Spatial transcriptomics for microenvironment decoding",
      "- PDO platform for drug screening and mechanism study",
      "- Bioinformatics engineering + database support",
      "",
      `verification hash => ${checksum}`,
    ];
    return { cmds, checksum, subtitle };
  };

  const randomChecksum = () => {
    // Simple, non-crypto checksum token just for UI.
    const base = Math.floor(Math.random() * 1e9).toString(16).padStart(8, "0");
    return `${base.slice(0, 4)}-${base.slice(4, 8)}-${Math.random().toString(16).slice(2, 6)}`.toUpperCase();
  };

  const renderTerminal = () => {
    const { cmds, checksum, subtitle } = terminalLines();
    const code = document.querySelector("#terminalBody code");
    if (code) {
      code.textContent = cmds.join("\n");
    }
    elText("checksum", `checksum: ${checksum}`);

    elText("randomSubtitle", subtitle);
  };

  const rerollBtn = $("#rerollBtn");
  if (rerollBtn) {
    rerollBtn.addEventListener("click", () => {
      renderTerminal();
    });
  }

  renderTerminal();
})();

