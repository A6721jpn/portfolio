# 要件定義・サイト構成案（確定版）

## プロジェクト目的
GitHub上でホストされる、個人の趣味プロジェクトを紹介するためのポートフォリオサイト。

## サイト構造
ユーザー要望により「About」と「Projects」に集約。

1.  **Home / Landing**
    *   ミニマルなランディング。AboutとProjectsへのナビゲーション。
2.  **About**
    *   自己紹介
    *   スキルセット
    *   連絡先
3.  **Projects (Portfolio)**
    *   プロジェクト一覧ページ
    *   **各プロジェクト詳細ページ (MDX)**
        *   **概要セクション** (Frontmatterまたは上部記載)
            *   Trigger (きっかけ)
            *   Approach (アプローチ)
            *   Goal (ゴール)
        *   **Timeline セクション** (MDX本文/コンポーネント)
            *   時系列での「課題」と「解決」の記録
        *   構成図 (Mermaid)
        *   技術解説 (KaTeX含む)

## デザイン要件
*   **テイスト**: フラット、シンプル
*   **カラー**: モノトーン主体（白、黒、グレー）。アクセントカラーは使わないか、最小限に留める。
*   **モード**: ライト/ダークモード対応（Tailwind `darkMode: 'class'`）

## 技術スタック (再確認)
*   **Core**: Astro
*   **Styling**: Tailwind CSS
*   **Format**: MDX
*   **Diagrams**: Mermaid (via integration or component)
*   **Math**: KaTeX (via `remark-math`/`rehype-katex`)
*   **Deploy**: GitHub Pages

## 初期コンテンツ
*   ダミーまたはプレースホルダーとして3つのプロジェクトを用意する。
*   ドメインはGitHub Pagesデフォルト (`username.github.io/repo` or similar).
