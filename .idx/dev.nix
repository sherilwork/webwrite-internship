{pkgs, ...}: {
  channel = "stable-24.11";

  packages = [
    pkgs.nodejs_20
  ];

  idx = {
    extensions = [
      "bradlc.vscode-tailwindcss"
      "dbaeumer.vscode-eslint"
    ];

    previews = {
      enable = true;
      previews = {
        web = {
          command = [
            "npm"
            "run"
            "dev"
            "--"
            "--port"
            "$PORT"
            "--hostname"
            "0.0.0.0"
          ];
          manager = "web";
        };
      };
    };

    workspace = {
      onCreate = {
        npm-install = "npm install";
        default.openFiles = ["src/app/page.tsx" "README.md"];
      };
      onStart = {
        npm-install = "npm install";
      };
    };
  };
}
