# 技術スタック計画書

## 概要
趣味プロジェクト紹介用のポートフォリオサイト構築に向けた技術選定。
パフォーマンスと開発体験に優れた **Astro** をコアフレームワークとして採用する。

## 採用技術一覧

| カテゴリ | 技術 | 選定理由・用途 |
| :--- | :--- | :--- |
| **Framework** | **Astro** | 静的サイト生成(SSG)に最適。アイランドアーキテクチャによりJSを最小限に抑え、爆速なロード時間を実現。Markdown/MDXとの親和性が高い。 |
| **Styling** | **Tailwind CSS** | ユーティリティファーストなCSSフレームワーク。Astroとの公式統合があり、迅速なUI構築が可能。 |
| **Content** | **Markdown / MDX** | 記事やプロジェクト詳細の執筆用。MDXを使うことで記事内にコンポーネント（MermaidやKaTeXなど）を埋め込み可能。 |
| **Diagrams** | **Mermaid** | 構成図、フローチャートの描画。`rehype-mermaid` やAstroのintegrationを利用してMDX内でレンダリングする。 |
| **Math** | **KaTeX** | 数式表示。軽量で高速。`remark-math` / `rehype-katex` を利用してMarkdown内の数式を変換する。 |
| **Hosting** | **GitHub Pages** / Cloudflare Pages | Git連携による自動デプロイ。初期はGitHub Pagesを想定し、必要に応じてCloudflare Pagesへの移行も検討（設定は `astro.config.mjs` で調整可能）。 |
| **Package Manager** | **npm** | 標準的なパッケージ管理。 |

## 開発環境構成
- **Node.js**: LTS推奨
- **Version Control**: Git
- **Virtual Environment**: Python venv (スクリプト処理や補助ツール用として既に作成済みだが、Astro自体の開発には主にNode.jsを使用)

## Astro構成案 (Integrations)
以下のIntegrationを導入予定:
- `@astrojs/tailwind`
- `@astrojs/mdx`
- `@astrojs/sitemap` (SEO用)
- `rehype-katex` / `remark-math` (数式用)
- Mermaid対応プラグイン (例: `astro-mermaid` などを検討)
