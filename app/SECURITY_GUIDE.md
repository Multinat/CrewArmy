# Security Configuration Guide

## 🔐 Password Protection Setup

Your presentation now has **two levels of security**:

### 1. **Presentation Access Password**
- **Location**: `components/auth-wrapper.tsx`
- **Current Password**: `CrewArmy2025`
- **Purpose**: Protects the entire presentation from unauthorized viewing
- **Session**: Expires when browser closes

### 2. **Admin Panel Password**
- **Location**: `app/admin/page.tsx`
- **Current Password**: `CrewAdmin2025`
- **Purpose**: Protects the admin panel for content editing
- **Access**: Separate from presentation access

## 🔧 How to Change Passwords

### Change Presentation Password:
1. Open `components/auth-wrapper.tsx`
2. Find line: `const PRESENTATION_PASSWORD = 'CrewArmy2025';`
3. Change to your desired password
4. Commit and push changes

### Change Admin Password:
1. Open `app/admin/page.tsx`
2. Find line: `const ADMIN_PASSWORD = 'CrewAdmin2025';`
3. Change to your desired password
4. Commit and push changes

## 🛡️ Security Features

### ✅ **What's Protected:**
- All presentation slides
- Admin panel access
- Content editing capabilities
- GitHub configuration

### ✅ **Security Measures:**
- Session-based authentication
- Password protection on both levels
- Secure logout functionality
- No password storage in localStorage
- Admin access separate from presentation access

### ✅ **User Experience:**
- Clean login interface
- Remember authentication during session
- Easy logout (hover top-right corner)
- Mobile-friendly login screens

## 🌐 **Access URLs:**

- **Presentation**: `https://multinat.github.io/CrewArmy/`
  - Password: `CrewArmy2025`
- **Admin Panel**: `https://multinat.github.io/CrewArmy/admin`
  - Password: `CrewAdmin2025`

## 🔄 **Deployment:**

After changing passwords:
```bash
git add .
git commit -m "Update security passwords"
git push origin main
```

Changes will be live within 2-3 minutes.

## 📱 **Mobile Support:**

Both login screens are fully responsive and work perfectly on mobile devices.

## ⚠️ **Important Notes:**

1. **Change the default passwords** before sharing with your team
2. **Use strong passwords** for production use
3. **Share passwords securely** (not via email/chat)
4. **Authentication expires** when browser session ends
5. **Admin access** is separate from presentation access

## 🎯 **Recommended Password Strategy:**

- **Presentation Password**: Share with all team members who need to view
- **Admin Password**: Only share with content editors/administrators
- **Use different passwords** for each level
- **Update regularly** for maximum security