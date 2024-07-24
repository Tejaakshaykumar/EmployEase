const API_URL = "http://localhost:5000/api/auth";

export const sendResetCode = async (email) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/forgot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      // Return the response parsed as JSON
      const data = await response.json();
      return { ok: response.ok, ...data }; // Include status and message
    } catch (error) {
      console.error('Error sending reset code:', error);
      return { ok: false, msg: 'Server error' }; // Fallback response
    }
  };

// ../store/api.js
export const resetPassword = async ({ code, newPassword }) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/reset', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, newPassword }),
      });
      
      const data = await response.json();
      return { ok: response.ok, ...data }; // Include success status
    } catch (error) {
      console.error('Error resetting password:', error);
      return { ok: false, msg: 'Server error' };
    }
  };
  
