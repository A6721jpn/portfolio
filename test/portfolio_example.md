---
title: "Adaptive Hex Meshing for Rubber Buckling Analysis"
slug: "adaptive-hex-mesh-buckling"
status: "In Progress"
started: "2024-11"
last_updated: "2025-01"
tags: ["CAE", "FEM", "Hex Mesh", "Nonlinear", "Rubber"]
---

## Overview

This project explores an adaptive hexahedral meshing strategy
for nonlinear buckling analysis of incompressible rubber components.

The goal is **not** to build a production-ready solver,
but to understand and control numerical stability around snap-through behavior.

---

## Background / Motivation

Rubber dome and compliant mechanisms often exhibit
strong geometric and material nonlinearity.

In existing workflows, mesh quality near symmetry axes
and thin regions frequently causes:

- Non-convergence
- Negative Jacobian errors
- Artificial stiffening

This project was started to **investigate how mesh topology
directly affects solver robustness**, rather than tuning solver parameters.

---

## Problem Definition

The core technical challenges addressed in this project are:

- Axisymmetric constraints combined with incompressibility
- Large deformation leading to element distortion
- Loss of convergence near snap-through

**Out of scope**:
- High-performance parallel solvers
- Commercial solver feature comparison

---

## Design Approach

The approach consists of three main steps:

1. Generate a structured quad mesh in 2D
2. Revolve the mesh into a hexahedral topology
3. Adaptively refine regions based on deformation metrics

Design priorities were:

- Element regularity over local density
- Predictable topology evolution
- Solver-agnostic mesh representation

---

## Implementation Details

### Mesh Generation Strategy

- Base mesh: quasi-structured quadrilateral mesh
- Revolve angle: 360°
- Element type: Hex8 (planned Hex20 test)

```text
2D Quad Mesh
   ↓ Revolve
3D Hex Mesh
   ↓ Adaptive refinement
Final analysis mesh
