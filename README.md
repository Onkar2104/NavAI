# NavAI – Real-Time Vision & Communication Assistant

[![Build Status](https://img.shields.io/badge/build-passing-green)](https://github.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-0.1.0-blue)](https://github.com)

**NavAI is a smartphone-based AI assistant designed to empower visually and hearing-impaired individuals in India, providing real-time environmental awareness and seamless two-way communication.**

---

## 📋 Table of Contents

1.  [The Problem](#-the-problem)
2.  [Our Solution](#-our-solution)
3.  [Core Features](#-core-features)
4.  [Tech Stack](#-tech-stack)
5.  [System Architecture](#-system-architecture)
6.  [Getting Started](#-getting-started)
7.  [Project Structure](#-project-structure)
8.  [Development Roadmap](#-development-roadmap)
9.  [References](#-references)

---

## 📌 The Problem

India faces a significant accessibility gap for its citizens with sensory impairments. The current landscape presents immense challenges to independent living and communication:

> -   **Visual Impairment:** Over **5 million** people are blind, and **70 million** live with some form of vision impairment.
> -   **Hearing Impairment:** Over **63 million** individuals have significant hearing loss, yet there are only approximately **250** certified sign language interpreters.

Existing digital aids, such as apps like *Be My Eyes*, often rely on volunteer availability and are limited to analyzing static images. They do not provide the continuous, real-time guidance needed for safe navigation and dynamic communication.

**Millions lack an affordable, intelligent, and reliable assistant to help them navigate public spaces and communicate with the world around them independently.**

---

## 💡 Our Solution

**NavAI** is an all-in-one mobile application that uses the power of on-device and cloud AI to act as the eyes and ears for those in need. It provides a continuous stream of information and facilitates communication, fostering greater independence and safety.

---

## ✨ Core Features

### 🧭 Vision-Based Navigator
* **Real-Time Object & Obstacle Detection:** Utilizes **YOLOv8** and **MediaPipe** to identify objects, pedestrians, and potential hazards in the user's path.
* **Live Scene Narration:** Provides continuous audio descriptions of the user's surroundings ("*A car is approaching from your left," "There is a staircase ahead*").
* **Intelligent Traffic Guidance:** Detects traffic light status and provides safe crossing alerts.
* **Safe-Route Navigation:** Integrates with the **Google Maps API** to provide accessible, turn-by-turn audio directions.

### ✋ Two-Way Sign Language Translator
* **Sign-to-Voice:** The camera recognizes Indian Sign Language (ISL) gestures, which are translated by **GPT-4** into natural language and spoken aloud.
* **Voice-to-Sign:** Spoken words are captured via **Whisper**, translated by **GPT-4** into ISL context, and then displayed as an animated sign language avatar.

### 🛡️ Multilingual & Safety Support
* **Regional Language Support:** Fully functional in major Indian languages, including Hindi, Marathi, Tamil, and Telugu.
* **SOS Emergency Command:** A simple voice command (e.g., "NavAI, help!") automatically calls a pre-set emergency contact and shares the user's live GPS location.
* **Ambient Noise Alerts:** Detects and warns the user about important background sounds, such as approaching vehicles, sirens, or fire alarms.

---

## 🔧 Tech Stack

* **Vision & Gesture Recognition:** YOLOv8, MediaPipe
* **AI / LLMs:** GPT-4 (Vision & Text), Whisper (Speech-to-Text)
* **Navigation:** Google Maps API
* **Mobile App:** React Native / Native SDKs (Android, iOS)
* **Speech Synthesis:** Platform-native Text-to-Speech (TTS) engines

---




